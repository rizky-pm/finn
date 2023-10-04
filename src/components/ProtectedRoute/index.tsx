import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import Splashscreen from '../Splashscreen';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, isLoading } = useFirebaseAuth();

  if (isLoading) {
    return <Splashscreen />;
  }

  if (!user) {
    return <Navigate to={'/signin'} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
