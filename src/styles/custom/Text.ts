import { defineStyleConfig } from '@chakra-ui/react';

const Text = defineStyleConfig({
  baseStyle: {
    transition: 'all 0.1s ease',
    textDecor: 'none',
    borderRadius: 'sm',
  },
  variants: {
    sidebarLink: {
      color: 'brand.white',
      fontWeight: 'semibold',
      padding: 2,
      cursor: 'pointer',
      _hover: {
        color: 'brand.black',
        backgroundColor: 'brand.white',
      },
    },

    sidebarLinkActive: {
      fontWeight: 'semibold',
      cursor: 'pointer',
      backgroundColor: 'brand.white',
      color: 'brand.black',
      padding: 2,
    },
  },
});

export default Text;
