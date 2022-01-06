/** @jsxImportSource @emotion/react */
import { keyframes, css, jsx } from "@emotion/react";
import { Box, BoxProps } from "topo/Atom";
import { useColorModeValue } from "@chakra-ui/react";

const load = keyframes`
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
`;

const loadAnimation = css`
  animation: ${load} 8s ease-in-out infinite;
`;

export const Skelly = (props: BoxProps) => (
  <Box
    grad={useColorModeValue("skelly", "darkSkelly")}
    height="1em"
    backgroundSize="800% 100%"
    marginBottom={1}
    borderRadius="sm"
    css={[loadAnimation]}
    {...props}
  />
);
Skelly.displayName = "Skelly";
