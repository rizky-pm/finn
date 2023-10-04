import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    // fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'brand.black',
      color: 'brand.black',
      _hover: {
        bg: 'brand.black',
        color: 'brand.white',
      },
    },
    solid: {
      bg: 'brand.black',
      color: 'brand.white',
      _hover: {
        bg: 'brand.blackLight',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'sm',
    variant: 'solid',
  },
});

const chakraTheme = extendTheme({
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
  },
});

export default chakraTheme;
