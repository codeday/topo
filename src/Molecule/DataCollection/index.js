import React from 'react';
import PropTypes from 'prop-types';
import PromiseIcon from '@codeday/topocons/Icon/Promise';
import SecureIcon from '@codeday/topocons/Icon/Secure';
import InfoIcon from '@codeday/topocons/Icon/UiInfo';
import Box, { Grid } from 'topo/Atom/Box';
import { Link } from 'topo/Atom/Text';
import Skelly from 'topo/Atom/Skelly';
import { useTheme, useString } from 'topo/utils';

const MessageIcons = {
  pii: PromiseIcon,
  payment: SecureIcon,
};

export default function DataCollection({ message }) {
  const { fontSizes } = useTheme();
  const renderedText = useString(`legal.data.${message}`, message in MessageIcons ? (<Skelly />) : message);
  const moreInfo = useString(`common.more-info`, 'More Info');

  const MessageIcon = MessageIcons[message] || InfoIcon;

  return (
    <Box color="gray.500">
      <Grid templateColumns={{ base: '1fr', md: `${fontSizes['2xl']} 1fr` }} gap={4} alignItems="center">
        <Box d={{ base: 'none', md: 'block' }} fontSize="2xl">
          <MessageIcon style={{ position: 'relative', top: '-2px', fill: 'currentColor' }} />
        </Box>
        <Box fontSize="sm">
          {renderedText}{' '}
          (<Link href="https://www.srnd.org/privacy" target="_blank">{moreInfo}</Link>)
        </Box>
      </Grid>
    </Box>
  );
}
DataCollection.propTypes = {
  message: PropTypes.string.isRequired,
};
