import { Flex, Container, Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import SignUpHero from '../../assets/images/signup.jpg';
import SignUpForm from '../../components/SignUpForm';

const StyledSignUpPage = styled.main`
  max-height: 100vh;
  overflow: hidden;
`;

const SignUpPage = () => {
  return (
    <StyledSignUpPage>
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
            src={SignUpHero}
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
            <SignUpForm />
          </Container>
        </Box>
      </Flex>
    </StyledSignUpPage>
  );
};

export default SignUpPage;