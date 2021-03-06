import { mode } from '@chakra-ui/theme-tools';

const components = {
  Popover: {
    baseStyle: (props) => ({
      content: {
        bg: mode('white', 'gray.1100')(props),
      },
      arrow: {
        bg: mode('white', 'gray.1100')(props),
      },
    })
  },
  Toast: {
    baseStyle: (props) => ({
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      bg: mode('white', 'gray.1100')(props),
    })
  },
  Chatra: {
    baseStyle: (props) => ({
      buttonText: colors.gray[400],
      buttonBg: mode('white', 'gray.1100')(props),
    })
  },
};
export default components;
