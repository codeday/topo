import { withProps } from 'recompose';
import Text from './Text';

const Code = withProps({
  fontFamily: 'mono',
  p: 2,
  paddingTop: 1,
  paddingBottom: 1,
  rounded: 'sm',
  display: 'inline',
  bg: 'gray.50',
  borderColor: 'gray.100',
  color: 'black',
  borderWidth: 1,
  fontSize: '0.9em',
})(Text);
Code.displayName = 'Code';
export default Code;
