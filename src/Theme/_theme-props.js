import React from 'react';
import CodeBlock from '../CodeBlock';
import { useTheme } from '../utils';

export default () => {
  const {
    icons: _, typography: __, color: ___, code: ____, addonActionsTheme: _____, background: _______, ...theme
  } = useTheme();
  return (<CodeBlock lang="json">{JSON.stringify(theme, null, 2)}</CodeBlock>);
};
