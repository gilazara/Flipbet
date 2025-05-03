import { getLocalStorageItem } from "@/common/services/storage";
import { UserSettings } from "../types";

export const getUser = (): Promise<UserSettings | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const stored = getLocalStorageItem<{ state?: UserSettings }>(
          "user-store"
        );

        if (!stored || !stored.state) {
          return resolve(null);
        }

        resolve(stored.state);
      } catch (error) {
        console.error("Failed to get user from localStorage:", error);
        reject(error);
      }
    }, 200);
  });
};
