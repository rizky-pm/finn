import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import Splashscreen from '../Splashscreen';
import Sidebar from '../Sidebar';
import { Box, Flex } from '@chakra-ui/react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useFirebaseAuth();

  if (isLoading) {
    return <Splashscreen />;
  }

  if (!user) {
    return <Navigate to={'/signin'} />;
  }

  return (
    <>
      <Flex>
        <Sidebar />
        <Box width={'85%'} px={6} py={6}>
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default ProtectedRoute;
