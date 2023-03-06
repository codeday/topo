import React from "react";
import { withProps } from "recompose";
import { Link, type LinkProps } from "@chakra-ui/react";

export default withProps<any, LinkProps>({
  textDecoration: "underline",
})(Link);
export type { LinkProps };
