import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import { reactChildrenMapRecursive } from '../utils';

export default function SiteLogo({ darkBackground, children, ...props }) {
  return (
    <Box {...props}>
      {reactChildrenMapRecursive(children, (child) => React.cloneElement(child, {
        color: darkBackground ? 'white' : null,
      }))}
    </Box>
  );
}
SiteLogo.displayName = 'SiteLogo';
SiteLogo.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  darkBackground: PropTypes.bool,
};
SiteLogo.defaultProps = {
  darkBackground: false,
};
