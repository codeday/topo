import React from "react";
import { withProps } from "recompose";
import { useColorModeValue, useColorMode, TextProps } from "@chakra-ui/react";
import Text from "./Text";
import { BoxProps } from "../Box";

interface CodeProps {
  fontFamily: string;
  p: number;
  paddingTop: number;
  paddingBottom: number;
  rounded: string;
  display: string;
  bg: string;
  borderColor: string;
  borderWidth: number;
  fontSize: string;
}

const Code = withProps<CodeProps, TextProps>({
  fontFamily: "mono",
  p: 2,
  paddingTop: 1,
  paddingBottom: 1,
  rounded: "sm",
  display: "inline",
  bg: "gray.50",
  borderColor: "gray.100",
  borderWidth: 1,
  fontSize: "0.9em",
})(Text);

Code.displayName = "Code";
export default Code;
