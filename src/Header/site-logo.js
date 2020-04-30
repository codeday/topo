import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

export default function SiteLogo({ darkBackground, children, ...props }) {
  return (
    <Box {...props}>
      {React.Children.map(children, (child) => React.cloneElement(child, { color: darkBackground ? 'white' : null }))}
    </Box>
  );
}
SiteLogo.displayName = 'SiteLogo';
SiteLogo.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  darkBackground: PropTypes.bool,
};
SiteLogo.defaultProps = {
  darkBackground: false,
};
