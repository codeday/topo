import React from "react";
import { withProps } from "recompose";
import {
  useColorModeValue,
  useColorMode,
  TextProps,
  forwardRef,
  ComponentWithAs,
} from "@chakra-ui/react";
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

// const Code = withProps<CodeProps, TextProps>({
//   fontFamily: "mono",
//   p: 2,
//   paddingTop: 1,
//   paddingBottom: 1,
//   rounded: "sm",
//   display: "inline",
//   bg: "gray.50",
//   borderColor: "gray.100",
//   borderWidth: 1,
//   fontSize: "0.9em",
// })(Text);

const Code: ComponentWithAs<"p", CodeProps> = forwardRef<CodeProps, "p">(({ children, ...props }, ref) => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.100", "gray.800");
  return (
    <Text
      {...props}
      fontFamily="mono"
      p={2}
      paddingTop={1}
      paddingBottom={1}
      rounded="sm"
      display="inline"
      bg={bg}
      borderColor={borderColor}
      borderWidth={1}
      fontSize="0.9em"
      ref={ref}
    >
      {children}
    </Text>
  );
});

Code.displayName = "Code";
export { Code, CodeProps };
