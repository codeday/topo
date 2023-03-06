import React from "react";
import { withProps } from "recompose";
import { Link as ChakraLink, type LinkProps } from "@chakra-ui/react";

export const Link = withProps<any, LinkProps>({
  textDecoration: "underline",
})(ChakraLink);
export type { LinkProps };
