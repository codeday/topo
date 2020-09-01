import React, { useState, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import UiMenu from '@codeday/topocons/Icon/UiMenu';
import UiX from '@codeday/topocons/Icon/UiX';
import Box from 'topo/Atom/Box';
import Content from 'topo/Molecule/Content';
import { childrenOfType, setChildProps } from 'topo/_utils';
import SiteLogo from './site-logo';
import Menu from './menu';

const Header = ({
  darkBackground, underscore, children, gradAmount, ...props
}) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const childrenWithProps = React.Children.map(children, setChildProps({ darkBackground }));
  const logo = childrenOfType(childrenWithProps, SiteLogo);
  const menu = childrenOfType(childrenWithProps, Menu);

  return (
    <>
      <Box
        grad={
          ((darkBackground && gradAmount !== false) || gradAmount)
          && `${darkBackground ? 'darken' : 'lighten'}.${gradAmount || 'sm'}.180`
        }
        as="nav"
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
            <Box float="right" textAlign="right" d={{ base: 'none', lg: 'block' }}>
              {menu}
            </Box>
            <Box
              float="right"
              textAlign="right"
              d={{ base: 'block', lg: 'none' }}
              fontSize="xl"
              color={darkBackground ? 'whiteAlpha.800' : 'current.textColor'}
            >
              <UiMenu
                style={{ color: 'currentColor', cursor: 'pointer', display: 'inline-block' }}
                onClick={() => setHamburgerOpen(!hamburgerOpen)}
                aria-label="Open Menu"
              />
            </Box>
            <Box style={{ clear: 'both' }} />
          </Box>
        </Content>
      </Box>

      {/* Hamburger Menu */}
      <Box
        as="nav"
        d={hamburgerOpen ? 'block' : 'none'}
        position="fixed"
        top="0"
        right="0"
        bottom="0"
        left="0"
        bg="current.bg"
        zIndex="9000"
        overflowY="auto"
      >
        <Box textAlign="right" p={8} fontSize="xl" onClick={() => setHamburgerOpen(false)} cursor="pointer">
          <UiX aria-label="Close Menu" />
        </Box>
        <Box textAlign="center" p={4}>
          <Box
            pb={4}
            mb={4}
            borderBottomWidth={1}
            borderBottomColor="current.border"
          >
            {Children.map(logo[0]?.props?.children, (c) =>
              cloneElement(c, {
                fontSize: '3xl',
                d: 'block',
                float: 'none',
                p: 2,
                role: 'menuitem',
              })
            )}
          </Box>
          {Children.map(
            menu[0]?.props?.children,
            (c, i) => (
              <Box
                pb={4}
                mb={4}
                borderBottomWidth={i+1 === menu[0].props.children.length ? 0 : 1}
                borderBottomColor="current.border"
              >
                {
                  cloneElement(c, {
                    fontSize: 'xl',
                    d: 'block',
                    float: 'none',
                    p: 2,
                    role: 'menuitem',
                  })
                }
              </Box>
          ))}
        </Box>
      </Box>
    </>
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
