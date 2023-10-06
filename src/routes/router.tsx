import { createBrowserRouter } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';
import Home from '../pages/Home';
import SignUpPage from '../pages/SignUp';
import SignInPage from '../pages/SignIn';
import Transactions from '../pages/Transactions';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/transactions',
    element: (
      <ProtectedRoute>
        <Transactions />
      </ProtectedRoute>
    ),
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
]);

export default router;
