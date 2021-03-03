import {
  useState, useEffect, useCallback,
} from 'react';
import { GraphQLClient } from 'graphql-request';
import { useTheme } from '@chakra-ui/react';
import { useToasts as useToastsNative } from 'react-toast-notifications';

export { useClipboard, useDisclosure } from '@chakra-ui/react';
export { useFathom as useAnalytics } from 'fathom-react';
export { useTheme };

export const api = 'https://graph.codeday.org/';
export const apiFetch = (query, variables, headers) => {
  const client = new GraphQLClient(api, { headers });
  return client.request(query, variables);
};

export function useToasts() {
  const { addToast, ...builtins } = useToastsNative();
  return {
    addToast,
    info: (children, opts) => addToast(children, { appearance: 'info', ...opts }),
    success: (children, opts) => addToast(children, { appearance: 'success', ...opts }),
    warning: (children, opts) => addToast(children, { appearance: 'warning', ...opts }),
    error: (children, opts) => addToast(children, { appearance: 'error', ...opts }),
    ...builtins,
  };
}

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
