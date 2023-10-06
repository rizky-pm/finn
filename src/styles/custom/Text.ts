import { defineStyleConfig } from '@chakra-ui/react';

const Text = defineStyleConfig({
  baseStyle: {
    fontWeight: 'semibold',
    transition: 'all 0.1s ease',
    cursor: 'pointer',
    textDecor: 'none',
    borderRadius: 'sm',
  },
  variants: {
    sidebarLink: {
      color: 'brand.white',
      padding: 2,
      _hover: {
        color: 'brand.black',
        backgroundColor: 'brand.white',
      },
    },
    sidebarLinkActive: {
      backgroundColor: 'brand.white',
      color: 'brand.black',
      padding: 2,
    },
  },
});

export default Text;
