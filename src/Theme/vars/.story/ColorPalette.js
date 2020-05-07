import React from 'react';
import Box from 'topo/Atom/Box';
import { useTheme } from 'topo/utils';

const renderColors = (colors, prefix) => {
  return Object.keys(colors).map((subKey) => {
    if (typeof colors[subKey] !== 'string') {
      return renderColors(colors[subKey], `${prefix}${subKey}.`)
    }
    return (
      <Box bg={`${prefix}${subKey}`} color={Number.isInteger(subKey) && subKey >= 500 ? 'white' : 'black'}>
        {prefix.replace('_.', '')}{subKey}&thinsp;&mdash;&thinsp;{colors[subKey]}
      </Box>
    );
  });

}

export default ({ color }) => {
  const { colors } = useTheme();
  return renderColors(colors[color], `${color}.`);
}
