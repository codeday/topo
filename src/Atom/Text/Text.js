import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';
import { pureRef } from 'topo/_utils';

const TextCompose = pureRef(({ as, bold, ...rest }, ref) => (
  <Box
    marginBottom={as === 'p' ? 4 : null}
    fontWeight={bold ? 'bold' : null}
    as={as || 'p'}
    {...rest}
    ref={ref}
  />
));
TextCompose.propTypes = {
  as: PropTypes.string,
  bold: PropTypes.bool,
  ...(Box.propTypes || {}),
};
TextCompose.defaultProps = {
  as: 'p',
  bold: false,
  ...(Box.defaultProps || {}),
};
export default TextCompose;
