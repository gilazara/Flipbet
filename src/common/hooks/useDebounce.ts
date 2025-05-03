import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const identifier = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(identifier);
  }, [value, delay]);

  return debounced;
}
