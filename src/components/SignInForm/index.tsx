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
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

import { fireauth } from '../../config/firebase';

type SignInFormValues = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { handleSubmit, register, formState } = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const navigate = useNavigate();
  const { isSubmitting, errors } = formState;

  const handleSignUp = async (values: SignInFormValues) => {
    const { email, password } = values;

    signInWithEmailAndPassword(fireauth, email, password)
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch((e: FirebaseError) => {
        if (e instanceof FirebaseError) {
          switch (e.code) {
            case 'auth/invalid-login-credentials':
              //   setErrorMessage('Invalid email or password');
              console.log('Invalid email or password');
              break;

            case 'auth/too-many-requests':
              //   setErrorMessage(
              //     'Your account is temporarily disabled due to multiple login failures. Try again later.'
              //   );
              console.log(
                'Your account is temporarily disabled due to multiple login failures. Try again later.'
              );
              break;

            case 'auth/credential-already-in-use':
              //   setErrorMessage(
              //     'Account conflict error. The provided credential is already associated with an existing user.'
              //   );
              console.log(
                'Account conflict error. The provided credential is already associated with an existing user.'
              );
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

        <Button size={'sm'} isLoading={isSubmitting} type='submit'>
          Sign In
        </Button>

        <Divider />

        <Button
          size={'sm'}
          isLoading={isSubmitting}
          variant={'outline'}
          onClick={() => {
            navigate('/signup');
          }}
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  );
};

export default SignInForm;
