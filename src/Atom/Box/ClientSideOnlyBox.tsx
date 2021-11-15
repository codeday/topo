/* eslint-disable no-undef */
import React from "react";
import { Box, BoxProps } from "topo/Atom";
import { useSsr } from "topo/utils";
import { forwardRef } from "@chakra-ui/react";

export interface ClientSideOnlyBoxProps extends BoxProps {
  children: React.ReactNode;
}

export default forwardRef<ClientSideOnlyBoxProps, "div">(
  ({ children, ...props }, ref) => {
    const isSsr = useSsr();
    return isSsr ? null : (
      <Box {...props} ref={ref}>
        {children}
      </Box>
    );
  }
);
