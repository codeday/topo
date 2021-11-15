import React from "react";
import { forwardRef, Box as ChakraBox, BoxProps as ChakraBoxProps, ChakraProps } from "@chakra-ui/react";
import { useTheme } from "topo/utils";
import { dereferenceDottedString } from "topo/_utils";

export interface BoxProps extends ChakraBoxProps {
  grad?: string;
  visuallyHidden?: boolean;
}

export default forwardRef<BoxProps, "div">(
  ({ grad, visuallyHidden, ...props }, ref) => {
    const theme = useTheme();
    const hiddenProps = {
      fontSize: "0",
      width: "1px",
      height: "1px",
      display: "inline-block",
      overflow: "hidden",
      border: "none",
      padding: "0",
      margin: "0",
    };
    return (
      <ChakraBox
        ref={ref}
        bgImg={grad && dereferenceDottedString(grad, theme.colors.grad)}
        {...props}
        {...(visuallyHidden ? hiddenProps : {})}
      />
    );
  }
);
