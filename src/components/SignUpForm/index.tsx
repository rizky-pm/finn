import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Stack,
  Divider,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

import { fireauth } from '../../config/firebase';

type SignUpFormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const SignUpForm = () => {
  const { handleSubmit, register, formState, getValues, reset } =
    useForm<SignUpFormValues>({
      defaultValues: {
        email: '',
        password: '',
        passwordConfirm: '',
      },
    });
  const navigate = useNavigate();
  const { isSubmitting, errors } = formState;

  const handleSignUp = async (values: SignUpFormValues) => {
    const { email, password } = values;

    createUserWithEmailAndPassword(fireauth, email, password)
      .then((userCredential) => {
        localStorage.setItem('user', JSON.stringify(userCredential.user));
        reset();
        navigate('/', { replace: true });
      })
      .catch((e: FirebaseError) => {
        if (e instanceof FirebaseError) {
          switch (e.code) {
            case 'auth/email-already-in-use':
              console.error(e);
              break;
            default:
              console.error('Firebase Error:', e);
          }
        } else {
          console.error('Non-Firebase Error:', e);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp)} noValidate>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.email}>
          <Input
            rounded={'sm'}
            id='email'
            placeholder='Email Address'
            {...register('email', {
              required: 'This is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <Input
            rounded={'sm'}
            id='password'
            type='password'
            placeholder='Password'
            {...register('password', {
              required: 'This is required',
              minLength: {
                value: 8,
                message: 'Minimum length should be 8 characters',
              },
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.passwordConfirm}>
          <Input
            rounded={'sm'}
            id='passwordConfirm'
            type='password'
            placeholder='Password Confirmation'
            {...register('passwordConfirm', {
              required: 'Password confirmation is required',
              validate: (value) =>
                value === getValues('password') || 'Password does not match',
            })}
          />
          <FormErrorMessage>
            {errors.passwordConfirm && errors.passwordConfirm.message}
          </FormErrorMessage>
        </FormControl>

        <Button size={'sm'} isLoading={isSubmitting} type='submit'>
          Sign Up
        </Button>

        <Divider />

        <Button
          size={'sm'}
          isLoading={isSubmitting}
          variant={'outline'}
          onClick={() => {
            navigate('/signin');
          }}
        >
          Sign In
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
