import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import components from "./components";
import { extensions } from "./extensions";
import fonts from "./fonts";
import styles from "./styles";

const Theme = {
  colors,
  fonts,
  styles,
  components,
  cognito: {
    // eslint-disable-next-line no-secrets/no-secrets
    id: "7hYXr3TPxk6yIpJxjqVoFQ",
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
};

export { Theme };
export default extendTheme(...extensions, { ...Theme });
