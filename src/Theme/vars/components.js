import { mode } from '@chakra-ui/theme-tools';

const components = {
  Popover: {
    baseStyle: {
      // bg: mode('white', 'gray.1100')(props),
      // bg: props.colorMode === 'dark' ? 'gray.1100' : 'white',
      bg: 'white',
    },
  },
};

export default components;
