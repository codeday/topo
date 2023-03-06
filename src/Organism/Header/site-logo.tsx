import PropTypes from "prop-types";
import React from "react";
import { reactChildrenMapRecursive } from "topo/_utils";
import { Box, type BoxProps } from "topo/Atom/Box";

export default function SiteLogo({ children, ...props }: BoxProps) {
  return (
    <Box fontSize="4xl" lineHeight={0} {...props}>
      {reactChildrenMapRecursive(children, (child) =>
        React.cloneElement(child as React.ReactElement)
      )}
    </Box>
  );
}
SiteLogo.displayName = "SiteLogo";
