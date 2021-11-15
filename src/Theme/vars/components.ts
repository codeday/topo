import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';


const components = {
  Popover: {
    baseStyle: (props: Dict | StyleFunctionProps) => ({
      content: {
        bg: mode('white', 'gray.1100')(props),
      },
      arrow: {
        bg: mode('white', 'gray.1100')(props),
      },
    }),
  },
  Toast: {
    baseStyle: (props: Dict | StyleFunctionProps) => ({
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      bg: mode('white', 'gray.1100')(props),
    }),
  },
};
export default components;
