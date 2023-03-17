import { type ThemeOverride } from '@chakra-ui/react';
import { mode, type StyleFunctionProps } from "@chakra-ui/theme-tools";
import { type Dict } from "@chakra-ui/utils";

const components: ThemeOverride["components"] = {
  Link: {
    variants: {
      base: {},
      underline: { textDecoration: "underline" },
    },
  },
  Popover: {
    baseStyle: (props: Dict | StyleFunctionProps) => ({
      content: {
        bg: mode("white", "gray.1100")(props),
      },
      arrow: {
        bg: mode("white", "gray.1100")(props),
      },
    }),
  },
  Toast: {
    baseStyle: (props: Dict | StyleFunctionProps) => ({
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      bg: mode("white", "gray.1100")(props),
    }),
  },
};
export default components;
