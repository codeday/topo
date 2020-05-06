import React from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';
import Content from 'topo/Molecule/Content';
import { childrenOfType, setChildProps } from 'topo/_utils';
import SiteLogo from './site-logo';
import Menu from './menu';

const Header = ({
  darkBackground, underscore, children, gradAmount, ...props
}) => {
  const childrenWithProps = React.Children.map(children, setChildProps({ darkBackground }));
  const logo = childrenOfType(childrenWithProps, SiteLogo);
  const menu = childrenOfType(childrenWithProps, Menu);

  return (
    <Box
      grad={
        ((darkBackground && gradAmount !== false) || gradAmount)
        && `${darkBackground ? 'darken' : 'lighten'}.${gradAmount || 'sm'}.180`
      }
      {...props}
    >
      <Content
        padding={3}
        paddingTop={6}
        paddingBottom={4}
      >
        <Box
          marginBottom={6}
          paddingBottom={4}
          borderBottomColor={darkBackground ? 'whiteAlpha.300' : 'gray.200'}
          borderBottomWidth={underscore ? '1px' : 0}
        >
          <Box float="left">
            {logo}
          </Box>
          <Box float="right" textAlign="right">
            {menu}
          </Box>
          <Box style={{ clear: 'both' }} />
        </Box>
      </Content>
    </Box>
  );
};
Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  darkBackground: PropTypes.bool,
  underscore: PropTypes.bool,
  gradAmount: PropTypes.string,
};
Header.defaultProps = {
  darkBackground: false,
  underscore: false,
  gradAmount: null,
};
export default Header;
export { SiteLogo, Menu };
