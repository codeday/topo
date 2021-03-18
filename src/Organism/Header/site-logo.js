import React from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';
import { reactChildrenMapRecursive } from 'topo/_utils';

export default function SiteLogo({ children, ...props }) {
  return (
    <Box fontSize="4xl" lineHeight={0} {...props}>
      {reactChildrenMapRecursive(children, (child) => React.cloneElement(child))}
    </Box>
  );
}
SiteLogo.displayName = 'SiteLogo';
SiteLogo.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
