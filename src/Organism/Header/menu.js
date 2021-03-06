import React from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';
import { Link } from 'topo/Atom/Text';
import Button from 'topo/Atom/Button';
import { reactChildrenMapRecursive } from 'topo/_utils';
import { useColorModeValue } from '@chakra-ui/media-query';

export default function Menu({ darkBackground, children, ...props }) {
  const darkColor = 'whiteAlpha.800';
  darkBackground = darkBackground === null ? useColorModeValue(false, true) : darkBackground;
  const getDarkProps = (child) => {
    if (!darkBackground) return {};

    if (child.type === Link
    || (child.type === Button && ['link', 'ghost'].includes(child.props.variant))) {
      return {
        color: darkColor,
      };
    }

    if (child.type === Button && !child.props.colorScheme) {
      return {
        variant: 'outline',
        colorScheme: 'white',
        borderColor: darkColor,
        color: darkColor,
      };
    }

    return {};
  };

  return (
    <Box {...props}>
      {reactChildrenMapRecursive(children, (child) => React.cloneElement(child, {
        textDecoration: 'none',
        transition: 'all 0.5s ease-in-out',
        ...getDarkProps(child),
      }))}
    </Box>
  );
}
Menu.displayName = 'Menu';
Menu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  darkBackground: PropTypes.bool,
};
Menu.defaultProps = {
  darkBackground: false,
};
