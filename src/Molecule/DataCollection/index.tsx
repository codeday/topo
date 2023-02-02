import PromiseIcon from "@codeday/topocons/Icon/Promise";
import SecureIcon from "@codeday/topocons/Icon/Secure";
import InfoIcon from "@codeday/topocons/Icon/UiInfo";
import PropTypes from "prop-types";
import React from "react";
import { Box, Grid, Link, Skelly } from "topo/Atom";
import { useString, useTheme } from "topo/utils";

const MessageIcons = {
  pii: PromiseIcon,
  payment: SecureIcon,
};
interface DataCollectionProps {
  message: 'pii' | 'payment';
}
function DataCollection({ message }: DataCollectionProps) {
  const { fontSizes } = useTheme();
  const renderedText = useString(
    `legal.data.${message}`,
    message in MessageIcons ? <Skelly /> : message
  );
  const moreInfo = useString(`common.more-info`, "More Info");

  const MessageIcon = MessageIcons[message] || InfoIcon;

  return (
    <Box color="current.textLight">
      <Grid
        templateColumns={{ base: "1fr", md: `${fontSizes["2xl"]} 1fr` }}
        gap={4}
        alignItems="center"
      >
        <Box d={{ base: "none", md: "block" }} fontSize="2xl">
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
DataCollection.propTypes = {
  message: PropTypes.string.isRequired,
};

export { DataCollection, DataCollectionProps };
