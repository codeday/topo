import React from "react";
import { withProps } from "recompose";
import { pureRef } from "topo/_utils";

import { Box, type ComponentWithAs, Heading, type HeadingProps } from "@chakra-ui/react";

import { type BoxProps } from "../Box";

export interface TextProps extends BoxProps {
  bold?: boolean;
}
export const Text: ComponentWithAs<"p", TextProps> = pureRef<TextProps, "p">(({ bold, ...props }, ref) => (
  <Box fontWeight={bold ? "bold" : {}} {...props} ref={ref} />
));
export const P = pureRef<TextProps, "p">(({ as, bold, ...rest }, ref) => (
  <Box
    marginBottom={(as as string) === "p" ? 4 : {}}
    fontWeight={bold ? "bold" : {}}
    as={as || "p"}
    {...rest}
    ref={ref}
  />
));

export const H1 = withProps<HeadingProps, HeadingProps>({
  as: "h1",
  size: "4xl",
})(Heading);
export const H2 = withProps<HeadingProps, HeadingProps>({
  as: "h2",
  size: "3xl",
})(Heading);
export const H3 = withProps<HeadingProps, HeadingProps>({
  as: "h3",
  size: "2xl",
})(Heading);
export const H4 = withProps<HeadingProps, HeadingProps>({
  as: "h4",
  size: "lg",
})(Heading);
export const H5 = withProps<HeadingProps, HeadingProps>({
  as: "h5",
  size: "md",
})(Heading);
export const H6 = withProps<HeadingProps, HeadingProps>({
  as: "h6",
  size: "sm",
})(Heading);
export const Span = withProps<TextProps, any>({ as: "span", marginBottom: 4 })(
  Box
);
