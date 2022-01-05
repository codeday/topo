import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box as ComposedBox } from '@chakra-ui/react';
import { useTheme } from 'topo/utils';
import { dereferenceDottedString } from 'topo/_utils';

const Box = forwardRef(({ grad, visuallyHidden, ...props }, ref) => {
  const theme = useTheme();
  const hiddenProps = {
    fontSize: '0',
    width: '1px',
    height: '1px',
    display: 'inline-block',
    overflow: 'hidden',
    border: 'none',
    padding: '0',
    margin: '0',
  };
  return (
    <ComposedBox
      ref={ref}
      bgImg={grad && dereferenceDottedString(grad, theme.colors.grad)}
      {...props}
      {...(visuallyHidden ? hiddenProps : {})}
    />
  );
});
Box.propTypes = {
  grad: PropTypes.string,
  visuallyHidden: PropTypes.bool,
  ...ComposedBox.propTypes,
};
Box.defaultProps = {
  grad: null,
  visuallyHidden: false,
};
export default Box;
