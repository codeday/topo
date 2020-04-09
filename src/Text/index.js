import React from 'react';
import PropTypes from 'prop-types';
import Text from '@chakra-ui/core/dist/Text';
import Link from '@chakra-ui/core/dist/Link';
import * as Editable from './Editable';

const TextCompose = ({ as, bold, ...rest }) => (
  <Text
    marginTop={as === 'p' ? 4 : null}
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
export { default as Code } from '@chakra-ui/core/dist/Code';
export { default as Heading } from '@chakra-ui/core/dist/Heading';
export { default as Tooltip } from '@chakra-ui/core/dist/Tooltip';
