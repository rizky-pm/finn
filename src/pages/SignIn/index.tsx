import { Flex, Container, Box, Image, Text } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import styled from '@emotion/styled';

import Splashscreen from '../../components/Splashscreen';
import SignInHero from '../../assets/images/signin.jpg';
import SignInForm from '../../components/SignInForm';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

const StyledSignInPage = styled.main`
  max-height: 100vh;
  overflow: hidden;
`;

const SignInPage = () => {
  const { user, isLoading } = useFirebaseAuth();

  if (isLoading) {
    return <Splashscreen />;
  }

  if (user) {
    return <Navigate to={'/'} />;
  }

  return (
    <StyledSignInPage>
      <Flex>
        <Box
          w={'50%'}
          h={'100vh'}
          bg={'brand.black'}
          color={'brand.white'}
          display={'flex'}
          alignItems={'center'}
        >
          <Image
            boxSize='100%'
            objectFit='cover'
            src={SignInHero}
            alt='Debit card transaction'
          />
        </Box>

        <Box
          w={'50%'}
          h={'100vh'}
          bg={'brand.white'}
          color={'brand.black'}
          display={'flex'}
          alignItems={'center'}
        >
          <Container p={20}>
            <Text as={'h1'} fontWeight={'extrabold'} fontSize='6xl'>
              Finn
            </Text>
            <Text as={'p'} mt={-4} mb={4} fontWeight={'regular'} fontSize='md'>
              Stay In Control. Track Every Expense with Finn.
            </Text>
            <SignInForm />
          </Container>
        </Box>
      </Flex>
    </StyledSignInPage>
  );
};

export default SignInPage;
