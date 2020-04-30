import React from 'react';
import PropTypes from 'prop-types';
import Box, { Grid } from '../Box';

export { default as SiteLogo } from './site-logo';
export { default as Menu } from './menu';

const Header = ({
  darkBackground, underscore, children, ...props
}) => {
  const childrenWithProps = React.Children.map(children, (child) => (
    React.cloneElement(child, { darkBackground })
  ));
  const Logo = childrenWithProps.filter((c) => c.type.displayName === 'SiteLogo')[0];
  const Menu = childrenWithProps.filter((c) => c.type.displayName === 'Menu')[0];
  return (
    <Box margin="0 auto" padding={3} paddingTop={6} paddingBottom={4} maxWidth="containers.lg" width="100%">
      <Box
        marginBottom={6}
        paddingBottom={4}
        borderBottomColor={darkBackground ? 'whiteAlpha.300' : 'gray.200'}
        borderBottomWidth={underscore ? '1px' : 0}
        {...props}
      >
        <Grid templateColumns="1fr 3fr">
          {Logo}
          <Box textAlign="right" paddingTop={1}>
            {Menu}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  darkBackground: PropTypes.bool,
  underscore: PropTypes.bool,
};
Header.defaultProps = {
  darkBackground: false,
  underscore: false,
};
export default Header;
