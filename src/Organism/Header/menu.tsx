import PropTypes from "prop-types";
import React from "react";
import { reactChildrenMapRecursive } from "topo/_utils";
import { Box, BoxProps } from "topo/Atom/Box";

export default function Menu({ children, ...props }: BoxProps) {
  return (
    <Box {...props}>
      {/* {children} */}
      {reactChildrenMapRecursive(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          textDecoration: "none",
          transition: "all 0.5s ease-in-out",
        })
      )}
    </Box>
  );
}
Menu.displayName = "Menu";
