import React from 'react';
import Box from 'topo/Atom/Box';

export default function Image({ src, alt, ...props }) {
  return (
    <Box as="img" src={src} alt={alt || ''} {...props} />
  );
}
