import get from "lodash.get";
import { createContext, useContext } from "react";

const QueryContext = createContext({});

export const QueryProvider = QueryContext.Provider;
export function useQuery<T = any>(key?: string, def?: T): T | undefined {
  const obj = useContext(QueryContext);
  if (!key) return obj as unknown as T;
  return get(obj, key, def || undefined);
}
