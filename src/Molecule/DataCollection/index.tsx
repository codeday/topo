import { Promise, Secure, UiInfo } from "@codeday/topocons";
import React from "react";
import { Box, Grid, Link, Skelly } from "topo/Atom";
import { useString, useTheme } from "topo/utils";

const MessageIcons = {
  pii: Promise,
  payment: Secure,
};
interface DataCollectionProps {
  message: "pii" | "payment";
}
function DataCollection({ message }: DataCollectionProps) {
  const { fontSizes } = useTheme();
  const renderedText = useString(
    `legal.data.${message}`,
    message in MessageIcons ? <Skelly /> : message
  );
  const moreInfo = useString(`common.more-info`, "More Info");

  const MessageIcon = MessageIcons[message] || UiInfo;

  return (
    <Box color="current.textLight">
      <Grid
        templateColumns={{ base: "1fr", md: `${fontSizes["2xl"]} 1fr` }}
        gap={4}
        alignItems="center"
      >
        <Box display={{ base: "none", md: "block" }} fontSize="2xl">
          <MessageIcon
            style={{ position: "relative", top: "-2px", fill: "currentColor" }}
          />
        </Box>
        <Box fontSize="sm">
          {renderedText} (
          <Link href="https://www.srnd.org/privacy" target="_blank">
            {moreInfo}
          </Link>
          )
        </Box>
      </Grid>
    </Box>
  );
}

export { DataCollection, type DataCollectionProps };
