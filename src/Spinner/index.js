import React, { forwardRef } from 'react';
import Box from '../Box';
import Image from '../Image';

const smilSupport = () => (typeof window === 'undefined'
  ? true
  // eslint-disable-next-line no-undef
  : window.document
    .createElementNS('http://www.w3.org/2000/svg', 'animate')
    .toString()
    .indexOf('SVG') > -1);

export default forwardRef((_, ref) => (
  <Box w="100%" textAlign="center">
    <Image
      ref={ref}
      src={`https://f1.srnd.org/topo/loading.${smilSupport() ? 'svg' : 'gif'}`}
      alt="(loading...)"
    />
  </Box>
));
