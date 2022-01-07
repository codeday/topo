import React from "react";
import { Box, BoxProps } from "topo/Atom";
import { Text } from "topo/Atom";
import { pureRef } from "topo/_utils";
import { withProps } from "recompose";
import { useColorModeValue } from "@chakra-ui/react";
import * as Icons from "./Icons";

// generate icons using https://www.npmjs.com/package/create-chakra-icons - create-chakra-icons  -o src/Atom/Logo/Icons.ts ./src/Atom/Logo/svgs --typescript

const upperFirst = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

interface LockupProps extends BoxProps {
  text: React.ReactNode;
  logo: React.ReactNode;
  logoColor?: string;
}

export interface LogoProps extends BoxProps {
  text?: string;
  withText?: true;
}

const Lockup = ({
  logo,
  text,
  logoColor,
  textColor,
  color,
  ...props
}: LockupProps) => (
  <Box d="inline" textDecoration="none" {...props}>
    <Box color="brand" height="1.1em" d="inline">
      {logo}
    </Box>
    <Box
      color={textColor || color || useColorModeValue("black", "white")}
      height="1em"
      d="inline"
    >
      {text}
    </Box>
  </Box>
);
Lockup.displayName = "Lockup";

export const Logo = pureRef<any, "div">(
  ({ program, withText, text, ...props }, ref) => {
    const logoPart = React.createElement(Icons[`${upperFirst(program)}`], {
      display: "inline",
      width: "auto",
    });
    let textPart = <></>;
    if (typeof text === "string") {
      textPart = (
        <Text
          d="inline"
          fontSize="0.94em"
          fontWeight="bold"
          fontFamily="logo"
          letterSpacing="tight"
          verticalAlign="middle"
          paddingLeft="2"
          position="relative"
          top="-0.05em"
        >
          {text}
        </Text>
      );
    } else if (withText) {
      textPart = React.createElement(Icons[`${upperFirst(program)}Text`], {
        display: "inline",
        width: "auto",
      });
    }

    return <Lockup logo={logoPart} text={textPart} {...props} ref={ref} />;
  }
);
Logo.displayName = "Logo";

export const CodeDay = withProps<any, LogoProps>({
  program: "codeday",
  "aria-label": "CodeDay",
})(Logo);
export const Labs = withProps<any, LogoProps>({
  program: "labs",
  "aria-label": "CodeDay Labs",
})(Logo);
export const CsFest = withProps<any, LogoProps>({
  program: "csfest",
  "aria-label": "CodeDay CS Fest",
})(Logo);
export const Evangelist = withProps<any, LogoProps>({
  program: "evangelist",
  "aria-label": "Code Evangelist",
})(Logo);
export const Clear = withProps<any, LogoProps>({
  program: "clear",
  "aria-label": "Clear",
})(Logo);
export const CodeCup = withProps<any, LogoProps>({
  program: "codecup",
  "aria-label": "CodeCup",
})(Logo);
export const Community = withProps<any, LogoProps>({
  program: "community",
  "aria-label": "Community",
})(Logo);
