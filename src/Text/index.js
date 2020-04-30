import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Text from '@chakra-ui/core/dist/Text';
import Link from '@chakra-ui/core/dist/Link';
import Box from '../Box';
import * as Editable from './Editable';

const TextCompose = ({ as, bold, ...rest }) => (
  <Text
    marginBottom={as === 'p' ? 4 : null}
    fontWeight={bold ? 'bold' : null}
    as={as}
    {...rest}
  />
);
TextCompose.propTypes = {
  as: PropTypes.string,
  bold: PropTypes.bool,
  ...(Text.propTypes || {}),
};
TextCompose.defaultProps = {
  as: 'p',
  bold: false,
  ...(Text.defaultProps || {}),
};

const LinkCompose = (props) => (
  <Link textDecoration="underline" {...props} />
);
LinkCompose.propTypes = Link.propTypes;
LinkCompose.defaultProps = Link.defaultProps;

export default TextCompose;
export { Editable, LinkCompose as Link };
export { default as Heading } from '@chakra-ui/core/dist/Heading';
export { default as Tooltip } from '@chakra-ui/core/dist/Tooltip';
export const Code = forwardRef((props, ref) => (
  <Box
    fontFamily="mono"
    p={2}
    paddingTop={1}
    paddingBottom={1}
    rounded="sm"
    display="inline"
    bg="gray.50"
    fontSize="0.9em"
    borderWidth={1}
    borderColor="gray.100"
    ref={ref}
    {...props}
  />
));
