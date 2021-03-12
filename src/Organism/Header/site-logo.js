import React from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';
import { reactChildrenMapRecursive } from 'topo/_utils';
import { useColorModeValue } from '@chakra-ui/react';

export default function SiteLogo({ children, ...props }) {
  const darkBackground = useColorModeValue(false, true);
  return (
    <Box fontSize="4xl" lineHeight={0} {...props}>
      {reactChildrenMapRecursive(children, (child) => React.cloneElement(child, {
        logoColor: darkBackground ? 'current.primary' : null,
        textColor: darkBackground ? 'white' : null,
      }))}
    </Box>
  );
}
SiteLogo.displayName = 'SiteLogo';
SiteLogo.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
