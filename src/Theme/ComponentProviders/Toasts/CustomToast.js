import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UiInfo from '@codeday/topocons/Icon/UiInfo';
import UiWarning from '@codeday/topocons/Icon/UiWarning';
import UiError from '@codeday/topocons/Icon/UiError';
import UiOk from '@codeday/topocons/Icon/UiOk';
import Box, { Grid } from 'topo/Atom/Box';

export default function CustomToast({
  appearance, children, transitionState, transitionDuration, onDismiss,
}) {
  const color = {
    success: 'green',
    error: 'red',
    warning: 'orange',
    info: 'blue',
  }[appearance || 'info'] || 'blue';

  const Icon = {
    success: UiOk,
    error: UiError,
    warning: UiWarning,
    info: UiInfo,
  }[appearance || 'info'] || UiInfo;

  return (
    <Box
      rounded="md"
      boxShadow="lg"
      borderWidth={1}
      borderColor="current.border"
      mb={4}
      bg="current.bg"
      position="relative"
      onClick={onDismiss}
      cursor="pointer"
      role="alert"
      aria-label="Notification"
      opacity={['entered'].includes(transitionState) ? 1 : 0}
      transition={`all ${transitionDuration / 1000}s`}
    >
      <Grid
        templateColumns="1fr 12fr"
      >
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
        <Box p={4}>
          {children}
        </Box>
      </Grid>
    </Box>
  );
}
CustomToast.propTypes = {
  appearance: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};
