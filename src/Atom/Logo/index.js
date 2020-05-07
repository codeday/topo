import React from 'react';
import PropTypes from 'prop-types';
import Box from 'topo/Atom/Box';
import Text from 'topo/Atom/Text';
import { pureRef } from 'topo/_utils';
import { withProps } from 'recompose';
import * as Svgs from './svgs';

const upperFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);


const Lockup = pureRef(({
  logo, text, logoColor, textColor, color, ...props
}, ref) => (
  <Box d="inline" style={{ textDecoration: 'none' }} {...props} ref={ref}>
    <Box color={logoColor || color || 'primary'} height="1.1em" d="inline">{logo}</Box>
    <Box color={textColor || color || 'text'} height="1em" d="inline">{text}</Box>
  </Box>
));
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
};
Logo.defaultProps = {
  ...Logo.defaultProps,
  text: null,
  withText: false,
};
export default Logo;

export const CodeDay = withProps({ program: 'codeday' })(Logo);
export const Labs = withProps({ program: 'labs' })(Logo);
export const CsFest = withProps({ program: 'csfest' })(Logo);
export const Evangelist = withProps({ program: 'evangelist' })(Logo);
export const Clear = withProps({ program: 'clear' })(Logo);
export const CodeCup = withProps({ program: 'codecup' })(Logo);
export const Community = withProps({ program: 'community' })(Logo);
