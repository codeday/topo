export { default as useToast } from '@chakra-ui/core/dist/Toast';
export { default as useClipboard } from '@chakra-ui/core/dist/useClipboard';
export { default as useDisclosure } from '@chakra-ui/core/dist/useDisclosure';
export { useTheme } from '@chakra-ui/core/dist/ThemeProvider';

export const dereferenceDottedString = (str, obj) => str.split('.').reduce((o, i) => o[i], obj);

export const debounce = (func, wait, immediate) => {
  let timeout;
  return () => {
    const context = this; const
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
