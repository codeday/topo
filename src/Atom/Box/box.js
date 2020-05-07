
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ComposedBox from '@chakra-ui/core/dist/Box';
import { useTheme } from 'topo/utils';
import { dereferenceDottedString } from 'topo/_utils';

const Box = forwardRef(({ grad, ...props }, ref) => {
  const theme = useTheme();
  return (
    <ComposedBox
      bgImg={grad && dereferenceDottedString(grad, theme.colors.grad)}
      {...props}
      ref={ref}
    />
  );
});
Box.propTypes = {
  grad: PropTypes.string,
  ...ComposedBox.propTypes,
};
Box.defaultProps = {
  grad: null,
};
export default Box;
