import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import Heart from './Heart';
import Text from '../Text';
import { useTheme } from '../utils';

const WithText = ({
  color, text, style, ...props
}) => {
  const { colors, fonts, fontSizes } = useTheme();

  return (
    <Box style={{ ...style, whiteSpace: 'nowrap' }} {...props}>
      <Heart color={color || colors.current().primary} style={{ height: fontSizes['4xl'] }} />
      <Text
        color={color || colors.current().text}
        d="inline"
        fontSize="2xl"
        fontWeight="bold"
        fontFamily={fonts.heading}
        verticalAlign="middle"
        paddingTop="1"
        paddingLeft="2"
      >
        {text}
      </Text>
    </Box>
  );
};
WithText.propTypes = {
  ...Box.propTypes,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  style: PropTypes.object,
};
WithText.defaultProps = {
  ...Box.defaultProps,
  color: null,
  style: {},
};

export const CodeDay = (props) => <WithText text="CodeDay" {...props} />;
export const Labs = (props) => <WithText text="CodeDay Labs" {...props} />;
export const CSFest = (props) => <WithText text="CS Fest" {...props} />;
export { Heart, WithText };
