import {
  useState, useEffect, useCallback,
} from 'react';
import { request } from 'graphql-request';
import { useTheme } from '@chakra-ui/core/dist/ThemeProvider';

export { default as useToast } from '@chakra-ui/core/dist/Toast';
export { default as useClipboard } from '@chakra-ui/core/dist/useClipboard';
export { default as useDisclosure } from '@chakra-ui/core/dist/useDisclosure';
export { useFathom as useAnalytics } from 'fathom-react';
export { useToasts } from 'react-toast-notifications';
export { useTheme };

export const api = 'https://graph.codeday.org/';
export const apiFetch = (query, variables) => request('https://graph.codeday.org/', query, variables);

export function useString(key, initialValue) {
  const { strings } = useTheme();
  return strings[key] || initialValue;
}

export function useLocalStorage(key, initialValue) {
  const [hasValue, setHasValue] = useState(false);
  const [value, setValue] = useState(
    () => (
      typeof window !== 'undefined'
        // eslint-disable-next-line no-undef
        ? (JSON.parse(window.localStorage.getItem(key)) || initialValue)
        : initialValue
    )
  );

  const handleStorageUpdate = useCallback(
    (event) => {
      if (event.key === key && event.newValue !== value) {
        setValue(JSON.parse(event.newValue) || initialValue);
      }
    },
    [value]
  );

  const setItem = (newValue) => {
    setValue(newValue);
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } else {
      setHasValue(true);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // If the SSR set the state, update localStorage during hydration.
      if (hasValue) {
        setItem(value);

      // Now that we're hydrated, re-set the value to the actual value from localStorage
      } else {
        // eslint-disable-next-line no-undef
        const newValue = window.localStorage.getItem(key);
        if (value !== newValue) {
          setValue(newValue || initialValue);
        }
      }
    }
  }, [typeof window]);

  // Register the onUpdate handler
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      window.addEventListener('storage', handleStorageUpdate);
    }
    return () => {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-undef
        window.removeEventListener('storage', handleStorageUpdate);
      }
    };
  }, [handleStorageUpdate, typeof window]);

  return [value, setItem];
}
