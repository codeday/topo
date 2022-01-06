import React from "react";
import { withProps } from "recompose";
import { Link, LinkProps } from "@chakra-ui/react";

export default withProps<any, LinkProps>({
  textDecoration: "underline",
})(Link);
export { LinkProps };
