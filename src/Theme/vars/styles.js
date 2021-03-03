import { mode, Styles } from '@chakra-ui/theme-tools';
import theme, { Theme } from '@chakra-ui/theme';

const styles = {
  ...theme.styles,
  global: (props) => ({
    body: {
      color: mode('black', 'whiteAlpha.900')(props),
      text: mode('black', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.900')(props),
      primary: mode('colors.brand', 'colors.whiteAlpha.900'),
      border: mode('colors.gray.200', 'colors.whiteAlpha.300'),
      borderColor: mode('colors.gray.200', 'colors.whiteAlpha.300'),
      placeholder: mode('colors.gray.600', 'colors.whiteAlpha.400'),
      transition: 'background-color 0.5s',
      lineHeight: 'base',
      fontFamily: 'body',
    },
  }),
};

export default styles;
