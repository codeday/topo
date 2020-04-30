import React, { forwardRef } from 'react';
import Box from './box';

export default forwardRef((props, ref) => (
  <Box
    paddingLeft={3}
    paddingRight={3}
    margin="0 auto"
    maxWidth="containers.lg"
    width="100%"
    marginBottom={3}
    ref={ref}
    {...props}
  />
));
