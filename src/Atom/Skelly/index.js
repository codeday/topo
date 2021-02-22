/** @jsx jsx */
import { keyframes, css, jsx } from '@emotion/react';
import Box from 'topo/Atom/Box';

const load = keyframes`
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
`;

const loadAnimation = css`
  animation: ${load} 8s ease-in-out infinite;
`;

const Skelly = (props) => (
  <Box
    grad="skelly"
    height="1em"
    backgroundSize="800% 100%"
    marginBottom={1}
    borderRadius="sm"
    css={[loadAnimation]}
    {...props}
  />
);
Skelly.displayName = 'Skelly';
export default Skelly;
