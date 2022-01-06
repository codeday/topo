import React from 'react';
import CodeBlock from '@codeday/topo/Atom';
import { useTheme } from '@codeday/topo/utils';

const AllVars = () => {
  const {
    icons: _, typography: __, color: ___, code: ____, addonActionsTheme: _____, background: _______, ...theme
  } = useTheme();
  return (<CodeBlock lang="json">{JSON.stringify(theme, null, 2)}</CodeBlock>);
};

export default AllVars