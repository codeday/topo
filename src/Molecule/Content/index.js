import React from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';
import { pureRef } from 'topo/_utils';

const Content = pureRef(({ wide, full, ...props }, ref) => (
  <Box
    paddingLeft={3}
    paddingRight={3}
    marginLeft="auto"
    marginRight="auto"
    marginBottom={6}
    maxW={(full && 'none') || (wide && 'container.xl') || 'container.lg'}
    width="100%"
    ref={ref}
    {...props}
  />
));
Content.displayName = 'Content';
Content.propTypes = {
  ...Box.propTypes,
  wide: PropTypes.bool,
  full: PropTypes.bool,
};
Content.defaultProps = {
  ...Box.defaultProps,
  wide: false,
  full: false,
};
export default Content;
