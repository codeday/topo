/* eslint-disable sonarjs/no-duplicate-string */
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const styles = {
  global: (props: Dict | StyleFunctionProps) => ({
    body: {
      color: mode("black", "whiteAlpha.900")(props),
      text: mode("black", "whiteAlpha.900")(props),
      bg: mode("white", "gray.1100")(props),
      background: mode("white", "gray.1100")(props),
      primary: mode("brand", "whiteAlpha.900")(props),
      border: mode("gray.200", "whiteAlpha.300")(props),
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      placeholder: mode("gray.600", "whiteAlpha.400")(props),
      transition: "background-color 0.5s",
      lineHeight: "base",
      fontFamily: "body",
    },
  }),
};

export default styles;
