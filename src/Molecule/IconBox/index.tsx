import React from "react";
import {
  childrenOfType,
  makePureBox,
  pureRef,
  setChildProps,
  wrapHtml,
} from "topo/_utils";
import { Box, type BoxProps } from "topo/Atom/Box";
import {type ComponentWithAs} from "@chakra-ui/react";

export const IconBoxIcon = makePureBox("IconBoxIcon");
export const IconBoxText = makePureBox("IconBoxText");
export const IconBoxBody = makePureBox("Body");

const IconBox: ComponentWithAs<"div", BoxProps> = pureRef<BoxProps, "div">(({ children, ...props }, ref) => {
  const headerIcon = childrenOfType(children, IconBoxIcon);
  const headerText = childrenOfType(children, IconBoxText);
  const body = childrenOfType(children, IconBoxBody);
  return (
    <Box borderWidth={1} borderRadius={3} padding={4} ref={ref} {...props}>
      {React.Children.map(
        wrapHtml(headerIcon),
        setChildProps(null, {
          fontSize: "5xl",
          marginBottom: 1,
          color: "current.primary",
          lineHeight: 0,
        })
      )}
      {React.Children.map(
        wrapHtml(headerText),
        setChildProps(null, {
          fontFamily: "accent",
          fontSize: "3xl",
          marginBottom: 2,
        })
      )}
      {React.Children.map(
        wrapHtml(body),
        setChildProps(null, { color: "current.textLight" })
      )}
    </Box>
  );
});
export { IconBox };
