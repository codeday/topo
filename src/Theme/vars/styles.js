import { mode } from '@chakra-ui/theme-tools';
import theme from '@chakra-ui/theme';

const styles = {
  ...theme.styles,
  global: (props) => ({
    body: {
      color: mode('black', 'whiteAlpha.900')(props),
      text: mode('black', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.1100')(props),
      background: mode('white', 'gray.1100')(props),
      primary: mode('brand', 'whiteAlpha.900'),
      border: mode('gray.200', 'whiteAlpha.300'),
      borderColor: mode('gray.200', 'whiteAlpha.300'),
      placeholder: mode('gray.600', 'whiteAlpha.400'),
      transition: 'background-color 0.5s',
      lineHeight: 'base',
      fontFamily: 'body',
    },
  }),
};

export default styles;
