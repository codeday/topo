import { useState, useEffect, useCallback } from "react";
import { GraphQLClient } from "graphql-request";
import {ToastId, useTheme, useToast as useToastNative, UseToastOptions, CreateToastFnReturn} from "@chakra-ui/react";

export { useClipboard, useDisclosure, ColorModeScript } from "@chakra-ui/react";
// @ts-ignore
export { useFathom as useAnalytics } from "fathom-react";
export { useTheme };

export function useSsr() {
  const [isSsr, setIsSsr] = useState(true);
  useEffect(() => setIsSsr(typeof window === "undefined"), [typeof window]);
  return isSsr;
}

export const api = "https://graph.codeday.org/";
export const apiFetch = (query: any, variables: any, headers: any) => {
  const client = new GraphQLClient(api, { headers });
  return client.request(query, variables);
};

export interface UseToastsOptions {
  success: (title: string, description?: string, options?: UseToastOptions) => ToastId
  warning: (title: string, description?: string, options?: UseToastOptions) => ToastId
  error: (title: string, description?: string, options?: UseToastOptions) => ToastId
  addToast: CreateToastFnReturn
  info: (title: string, description?: string, options?: UseToastOptions) => ToastId
}

export function useToasts(): UseToastsOptions {
  const toast = useToastNative();
  return {
    addToast: toast,
    info: (title, description, options) =>
        toast({ title, description, status: 'info', ...options }),
    success: (title, description, options) =>
        toast({ title, description, status: 'success', ...options }),
    warning: (title, description, options) =>
        toast({ title, description, status: 'warning', ...options }),
    error: (title, description, options) =>
        toast({ title, description, status: 'error', ...options }),
  }
}

export function useString(key: string | number, initialValue: any) {
  const { strings } = useTheme();
  return strings[key] || initialValue;
}

export function useLocalStorage(key: string, initialValue: any) {
  const [hasValue, setHasValue] = useState(false);
  const [value, setValue] = useState(() =>
      typeof window !== "undefined"
          ? // eslint-disable-next-line no-undef
          JSON.parse(window.localStorage.getItem(key) as string) || initialValue
          : initialValue
  );

  const handleStorageUpdate = useCallback(
      //@ts-ignore
      (event) => {
        if (event.key === key && event.newValue !== value) {
          setValue(JSON.parse(event.newValue) || initialValue);
        }
      },
      [value]
  );

  const setItem = (newValue: any) => {
    setValue(newValue);
    if (typeof window !== "undefined") {
      // eslint-disable-next-line no-undef
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } else {
      setHasValue(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
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
    if (typeof window !== "undefined") {
      // eslint-disable-next-line no-undef
      window.addEventListener("storage", handleStorageUpdate);
    }
    return () => {
      if (typeof window !== "undefined") {
        // eslint-disable-next-line no-undef
        window.removeEventListener("storage", handleStorageUpdate);
      }
    };
  }, [handleStorageUpdate, typeof window]);

  return [value, setItem];
}
