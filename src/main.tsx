import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import router from './routes/router.tsx';
import chakraTheme from './styles/chakraTheme.ts';

import './index.css';
import Navbar from './components/Navbar/index.tsx';
import Footer from './components/Footer/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraTheme}>
      <CSSReset />
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </ChakraProvider>
  </React.StrictMode>
);
