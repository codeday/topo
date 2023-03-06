import React, { Children, cloneElement, useState } from "react";
import { UiX, UiMenu } from "@codeday/topocons";
import { childrenOfType, setChildProps } from "topo/_utils";
import { Box, type BoxProps } from "topo/Atom/Box";
import { Content } from "topo/Molecule";
import { useColorModeValue } from "topo/Theme";

import Menu from "./menu";
import SiteLogo from "./site-logo";

interface HeaderProps extends BoxProps {
  underscore?: boolean;
  gradAmount?: any;
  noPadding?: boolean;
  noGrad?: boolean;
  darkBackground?: boolean;
}

const Header = ({
  underscore,
  children,
  gradAmount,
  noPadding,
  noGrad,
  darkBackground = useColorModeValue(false, true),
  ...props
}: HeaderProps) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const childrenWithProps = React.Children.map(children, setChildProps({}));
  const logo = childrenOfType(childrenWithProps, SiteLogo);
  const menu = childrenOfType(childrenWithProps, Menu);
  return (
    <>
      <Box
        grad={
          ((darkBackground && gradAmount) || gradAmount) &&
          `${darkBackground ? "darken" : "lighten"}.${gradAmount || "sm"}.180`
        }
        as="nav"
        {...props}
      >
        <Content
          padding={noPadding ? 0 : 3}
          paddingTop={noPadding ? 0 : 6}
          paddingBottom={noPadding ? 0 : 4}
          marginBottom={noPadding ? 0 : 6}
        >
          <Box
            marginBottom={noPadding ? 0 : 6}
            paddingBottom={noPadding ? 0 : 4}
            borderBottomColor={darkBackground ? "whiteAlpha.300" : "gray.200"}
            borderBottomWidth={underscore ? "1px" : 0}
          >
            <Box float="left">{logo}</Box>
            <Box
              float="right"
              textAlign="right"
              display={{ base: "none", lg: "block" }}
            >
              {menu}
            </Box>
            <Box
              float="right"
              textAlign="right"
              display={{ base: "block", lg: "none" }}
              fontSize="xl"
              color={darkBackground ? "whiteAlpha.800" : "current.textColor"}
            >
              <UiMenu
                style={{
                  color: "currentColor",
                  cursor: "pointer",
                  display: "inline-block",
                }}
                onClick={() => setHamburgerOpen(!hamburgerOpen)}
                aria-label="Open Menu"
              />
            </Box>
            <Box style={{ clear: "both" }} />
          </Box>
        </Content>
      </Box>

      {/* Hamburger Menu */}
      <Box
        as="nav"
        display={hamburgerOpen ? "block" : "none"}
        position="fixed"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="9000"
        overflowY="auto"
        background={useColorModeValue("white", "gray.1100")}
      >
        <Box
          textAlign="right"
          p={8}
          fontSize="xl"
          onClick={() => setHamburgerOpen(false)}
          cursor="pointer"
        >
          <UiX aria-label="Close Menu" />
        </Box>
        <Box textAlign="center" p={4}>
          <Box pb={4} mb={4} borderBottomWidth={1}>
            {cloneElement(logo[0] as React.ReactElement<any>, {
              fontSize: "3xl",
              d: "block",
              float: "none",
              p: 2,
              role: "menuitem",
            })}
          </Box>
          {Children.map(
            Children.toArray(
              (menu[0] as React.ReactElement<any>)?.props?.children
            ).filter((e) => e),
            (c, i) => (
              <Box
                pb={4}
                mb={4}
                borderBottomWidth={
                  i + 1 ===
                  (menu[0] as React.ReactElement<any>).props.children.length
                    ? 0
                    : 1
                }
              >
                {cloneElement(c as React.ReactElement<any>, {
                  fontSize: "xl",
                  d: "block",
                  float: "none",
                  p: 2,
                  role: "menuitem",
                })}
              </Box>
            )
          )}
        </Box>
      </Box>
    </>
  );
};
export { SiteLogo, Menu, Header, type HeaderProps };
