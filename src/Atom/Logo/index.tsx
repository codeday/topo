import React from "react";
import { Box, BoxProps } from "topo/Atom";
import { Text } from "topo/Atom";
import { pureRef } from "topo/_utils";
import { withProps } from "recompose";
import { useColorModeValue } from "@chakra-ui/react";
import * as Svgs from "./svgs";

const upperFirst = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

interface LockupProps {
  text: React.ReactNode;
  logo: React.ReactNode;
  logoColor?: string;
}

interface LogoProps {
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
}: LockupProps & BoxProps) => (
  <Box d="inline" style={{ textDecoration: "none" }} {...props}>
    <Box
      color={logoColor || color || "current.primary"}
      height="1.1em"
      d="inline"
    >
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
    const logoPart = React.createElement(Svgs[`${upperFirst(program)}`], {
      style: { display: "inline" },
    });
    let textPart = <></>;
    if (typeof text === "string") {
      textPart = (
        <Text
          d="inline"
          fontSize="0.9em"
          fontWeight="bold"
          fontFamily="heading"
          verticalAlign="middle"
          paddingLeft="2"
          position="relative"
          top="0.05em"
        >
          {text}
        </Text>
      );
    } else if (withText) {
      textPart = React.createElement(Svgs[`${upperFirst(program)}Text`], {
        style: { display: "inline" },
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
