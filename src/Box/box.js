
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ComposedBox from '@chakra-ui/core/dist/Box';
import { useTheme, dereferenceDottedString } from '../utils';

const Box = forwardRef(({ grad, ...props }, ref) => {
  const theme = useTheme();
  return <ComposedBox ref={ref} bgImg={grad && dereferenceDottedString(grad, theme.colors.grad)} {...props} />;
});
Box.propTypes = {
  grad: PropTypes.string,
  ...ComposedBox.propTypes,
};
Box.defaultProps = {
  grad: null,
};
export default Box;
