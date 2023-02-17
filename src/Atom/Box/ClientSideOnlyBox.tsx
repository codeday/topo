/* eslint-disable no-undef */
import React from "react";
import { Box, BoxProps } from "topo/Atom";
import { useSsr } from "topo/utils";
import {ComponentWithAs, forwardRef} from "@chakra-ui/react";

export const ClientSideOnlyBox: ComponentWithAs<"div", BoxProps> = forwardRef<BoxProps, "div">(
  ({ children, ...props }, ref) => {
    const isSsr = useSsr();
    return isSsr ? null : (
      <Box {...props} ref={ref}>
        {children}
      </Box>
    );
  }
);
