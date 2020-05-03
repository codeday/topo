import React from 'react';

export { default as useToast } from '@chakra-ui/core/dist/Toast';
export { default as useClipboard } from '@chakra-ui/core/dist/useClipboard';
export { default as useDisclosure } from '@chakra-ui/core/dist/useDisclosure';
export { useTheme } from '@chakra-ui/core/dist/ThemeProvider';
export { useAnalytics } from './Theme/_analytics';

export const dereferenceDottedString = (str, obj) => str.split('.').reduce((o, i) => o[i], obj);

export const debounce = (func, wait, immediate) => {
  let timeout;
  return (...args) => {
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


export const reactChildrenMapRecursive = (children, fn) => React.Children.map(children, (child) => {
  if (!React.isValidElement(child)) {
    return child;
  }

  if (child.props.children) {
    return fn(React.cloneElement(child, {
      children: reactChildrenMapRecursive(child.props.children, fn),
    }));
  }

  return fn(child);
});
