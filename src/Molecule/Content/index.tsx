import React from "react";
import { pureRef } from "topo/_utils";
import { Box, BoxProps } from "topo/Atom/Box";
import { ComponentWithAs } from "@chakra-ui/react";

interface ContentProps extends BoxProps {
  wide?: boolean;
  full?: boolean;
}

const Content: ComponentWithAs<"div", ContentProps> = pureRef<ContentProps, "div">(
  ({ wide, full, ...props }, ref) => (
    <Box
      paddingLeft={3}
      paddingRight={3}
      marginLeft="auto"
      marginRight="auto"
      marginBottom={6}
      maxW={(full && "none") || (wide && "container.xl") || "container.lg"}
      width="100%"
      ref={ref}
      {...props}
    />
  )
);
Content.displayName = "Content";
export { Content, ContentProps };
