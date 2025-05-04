export const getLocalStorageItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (!item) return null;

  try {
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(
      `Error parsing localStorage item for the key "${key}":`,
      error
    );
    return null;
  }
};
