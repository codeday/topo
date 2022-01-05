import React from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';
import Text from 'topo/Atom/Text';
import { pureRef } from 'topo/_utils';
import { withProps } from 'recompose';
import { useColorModeValue } from '@chakra-ui/react';
import * as Svgs from './svgs';

const upperFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const Lockup = ({
  logo, text, logoColor, textColor, color, ...props
}) => (
  <Box d="inline" style={{ textDecoration: 'none' }} {...props}>
    <Box
      color={logoColor || color || 'current.primary'}
      height="1.1em"
      d="inline"
    >
      {logo}
    </Box>
    <Box
      color={textColor || color || useColorModeValue('black', 'white')}
      height="1em"
      d="inline"
    >
      {text}
    </Box>
  </Box>
);
Lockup.displayName = 'Lockup';
Lockup.propTypes = {
  ...Lockup.propTypes,
  logo: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  color: PropTypes.string,
  logoColor: PropTypes.string,
  textColor: PropTypes.string,
};
Lockup.defaultProps = {
  ...Lockup.defaultProps,
  color: null,
  logoColor: null,
  textColor: null,
};

const Logo = pureRef(({
  program, withText, text, ...props
}, ref) => {
  const logoPart = React.createElement(Svgs[`${upperFirst(program)}`], { style: { display: 'inline' } });
  let textPart = <></>;
  if (typeof text === 'string') {
    textPart = (
      <Text
        d="inline"
        fontSize="0.9em"
        fontWeight="bold"
        fontFamily="heading"
        verticalAlign="middle"
        paddingLeft="2"
        position="relative"
        top="0.05em"
      >
        {text}
      </Text>
    );
  } else if (withText) {
    textPart = React.createElement(Svgs[`${upperFirst(program)}Text`], { style: { display: 'inline' } });
  }

  return <Lockup logo={logoPart} text={textPart} {...props} ref={ref} />;
});
Logo.displayName = 'Logo';
Logo.propTypes = {
  ...Logo.propTypes,
  program: PropTypes.string.isRequired,
  text: PropTypes.string,
  withText: PropTypes.bool,
  logoColor: PropTypes.string,
  textColor: PropTypes.string,
};
Logo.defaultProps = {
  ...Logo.defaultProps,
  text: null,
  withText: false,
};
export default Logo;

export const CodeDay = withProps({ program: 'codeday', 'aria-label': 'CodeDay' })(Logo);
export const Labs = withProps({ program: 'labs', 'aria-label': 'CodeDay Labs' })(Logo);
export const CsFest = withProps({ program: 'csfest', 'aria-label': 'CodeDay CS Fest' })(Logo);
export const Evangelist = withProps({ program: 'evangelist', 'aria-label': 'Code Evangelist' })(Logo);
export const Clear = withProps({ program: 'clear', 'aria-label': 'Clear' })(Logo);
export const CodeCup = withProps({ program: 'codecup', 'aria-label': 'CodeCup' })(Logo);
export const Community = withProps({ program: 'community', 'aria-label': 'Community' })(Logo);
