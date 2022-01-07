import React, { useState, useEffect, MouseEventHandler } from "react";
import PropTypes from "prop-types";
import UiInfo from "@codeday/topocons/Icon/UiInfo";
import UiWarning from "@codeday/topocons/Icon/UiWarning";
import UiError from "@codeday/topocons/Icon/UiError";
import UiOk from "@codeday/topocons/Icon/UiOk";
import { Grid, Box } from "topo/Atom";
import { useStyleConfig } from "@chakra-ui/system";
import { ToastProps } from "react-toast-notifications";

export default function CustomToast({
  appearance,
  children,
  transitionState,
  transitionDuration,
  onDismiss,
}: ToastProps) {
  const color =
    {
      success: "green",
      error: "red",
      warning: "orange",
      info: "blue",
    }[appearance || "info"] || "blue";

  const Icon =
    {
      success: UiOk,
      error: UiError,
      warning: UiWarning,
      info: UiInfo,
    }[appearance || "info"] || UiInfo;
  const styles = useStyleConfig("Toast");
  return (
    <Box
      rounded="md"
      boxShadow="lg"
      borderWidth={1}
      mb={4}
      position="relative"
      onClick={() => onDismiss()}
      cursor="pointer"
      role="alert"
      aria-label="Notification"
      opacity={transitionState && ["entered"].includes(transitionState) ? 1 : 0}
      transition={`all ${
        transitionDuration ? (transitionDuration as number) / 1000 : 0
      }s`}
      sx={styles}
    >
      <Grid templateColumns="1fr 12fr">
        <Box
          color={`${color}.50`}
          bg={`${color}.600`}
          textAlign="center"
          p={1}
          pr={5}
          position="relative"
          rounded="md"
          borderTopRightRadius="0"
          borderBottomRightRadius="0"
        >
          <Box position="absolute" top="50%" transform="translateY(-50%)">
            <Icon aria-label={appearance} />
          </Box>
        </Box>
        <Box p={4}>{children}</Box>
      </Grid>
    </Box>
  );
}
