import React from 'react';
import { withProps } from 'recompose';
import { useColorModeValue, useColorMode } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
import Text from './Text';

// const Code = withProps({
//   fontFamily: 'mono',
//   p: 2,
//   paddingTop: 1,
//   paddingBottom: 1,
//   rounded: 'sm',
//   display: 'inline',
//   bg: 'gray.50',
//   borderColor: 'gray.100',
//   borderWidth: 1,
//   fontSize: '0.9em',
// })(Text);

const Code = ({ children, ...props }) => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.800');
  return (
    <Text
      {...props}
      fontFamily="mono"
      p={2}
      paddingTop={1}
      paddingBottom={1}
      rounded="sm"
      display="inline"
      bg={bg}
      borderColor={borderColor}
      borderWidth={1}
      fontSize="0.9em"
    >
      {children}
    </Text>
  );
};

Code.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
Code.defaultProps = {
  children: null,
};

Code.displayName = 'Code';
export default Code;
