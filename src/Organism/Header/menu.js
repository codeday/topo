import React from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';
import { reactChildrenMapRecursive } from 'topo/_utils';

export default function Menu({ darkBackground, children, ...props }) {
  const darkColor = 'whiteAlpha.800';

  const getDarkProps = (child) => {
    if (!darkBackground) return {};

    if (child.type.displayName === 'Link'
    || (child.type.displayName === 'Button' && ['link', 'ghost'].includes(child.props.variant))) {
      return {
        color: darkColor,
      };
    }

    if (child.type.displayName === 'Button' && !child.props.variantColor) {
      return {
        variant: 'outline',
        variantColor: 'white',
        borderColor: darkColor,
        color: darkColor,
      };
    }

    return {};
  };

  return (
    <Box {...props}>
      {reactChildrenMapRecursive(children, (child) => React.cloneElement(child, {
        marginLeft: '5',
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
