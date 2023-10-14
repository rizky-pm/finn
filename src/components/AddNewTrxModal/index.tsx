import { useState } from 'react';
import {
  Modal,
  ModalProps,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  Stack,
  InputGroup,
  InputLeftAddon,
  FormControl,
  FormErrorMessage,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';

import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import { firestore } from '../../config/firebase';
import dateUtils from '../../utils/Time';

import { TransactionType, MessageType } from '../../../common';

type AddNewTrxValues = {
  category: '';
  title: string;
  amount: null | number;
};

const AddNewTrxModal = ({ isOpen, onClose }: ModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageType>({
    type: null,
    text: '',
  });

  const { handleSubmit, register, formState, reset } = useForm<AddNewTrxValues>(
    {
      defaultValues: {
        category: '',
        title: '',
        amount: null,
      },
    }
  );
  const { user } = useFirebaseAuth();

  const { errors } = formState;

  const handleAddNewTrx = async (values: AddNewTrxValues) => {
    const { title, amount, category } = values;

    if (user && title && amount && category) {
      setIsSubmitting(true);
      const { currentUnix } = dateUtils();
      const randomUUID = uuidv4();

      const categoryRef = doc(firestore, 'categories', category);

      const payload: TransactionType = {
        id: randomUUID,
        userId: user?.uid,
        createdAt: currentUnix,
        category: categoryRef,
        title,
        amount,
      };

      try {
        await setDoc(doc(firestore, 'transactions', randomUUID), payload);

        setMessage({
          type: 'success',
          text: 'Transaction Added',
        });

        setIsSubmitting(false);
        reset();
      } catch (error) {
        console.log(error);
      }

      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setMessage({
      type: null,
      text: '',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Transaction</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(handleAddNewTrx)} noValidate>
          <ModalBody>
            <Stack>
              {message.type && (
                <>
                  <Alert status={message.type}>
                    <AlertIcon />
                    {message.text}
                  </Alert>
                </>
              )}
              <FormControl isInvalid={!!errors.category}>
                <Select
                  placeholder='Category'
                  variant='filled'
                  {...register('category', {
                    required: 'Category is required',
                  })}
                >
                  <option value='transportation'>Transportation</option>
                  <option value='foodanddrink'>Food And Drink</option>
                  <option value='salary'>Salary</option>
                </Select>
                <FormErrorMessage>
                  {errors.category && errors.category.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.category}>
                <Input
                  placeholder='Title'
                  type='text'
                  {...register('title', {
                    required: 'Title is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.title && errors.title.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.category}>
                <InputGroup>
                  <InputLeftAddon children='Rp.' />
                  <Input
                    type='number'
                    placeholder='420000'
                    {...register('amount', {
                      required: 'Amount is required',
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.amount && errors.amount.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={2}
              type='submit'
              isDisabled={isSubmitting}
            >
              Add
            </Button>
            <Button
              variant='ghost'
              onClick={handleCloseModal}
              isDisabled={isSubmitting}
            >
              Close
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default AddNewTrxModal;
