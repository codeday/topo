import React from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';
import { Link } from 'topo/Atom/Text';
import Button from 'topo/Atom/Button';
import { reactChildrenMapRecursive } from 'topo/_utils';
import { useColorModeValue } from '@chakra-ui/media-query';

export default function Menu({ children, ...props }) {
  return (
    <Box {...props}>
      {/* {children} */}
      {reactChildrenMapRecursive(children, (child) => React.cloneElement(child, {
        textDecoration: 'none',
        transition: 'all 0.5s ease-in-out',
      }))}
    </Box>
  );
}
Menu.displayName = 'Menu';
Menu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
