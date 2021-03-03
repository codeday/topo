import React from 'react';
import Box from 'topo/Atom/Box';
import { useTheme } from 'topo/utils';

export default ({ color }) => {
  const { colors } = useTheme();
  console.log(colors)
  return [50,100,200,300,400,500,600,700,800,900].map((shade) => (
    <Box bg={`${color}.${shade}`} color={shade >= 500 ? 'white' : 'black'}>
      {color}.{shade}&thinsp;&mdash;&thinsp;{colors[color][shade]}
    </Box>
  ));
}
