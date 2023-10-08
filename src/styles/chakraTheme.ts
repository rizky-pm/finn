import { extendTheme } from '@chakra-ui/react';

import Button from './custom/Button';
import Text from './custom/Text';

const chakraTheme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  colors: {
    brand: {
      white: '#FAFAFF',
      whitePlatinum: '#DADDD8',
      whiteAlabaster: '#ECEBE4',
      whiteAntiFlash: '#EEF0F2',
      black: '#1C1C1C',
      blackLight: '#333333',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.white',
        color: 'brand.black',
      },
    },
  },
  components: {
    Button,
    Text,
  },
});

export default chakraTheme;
