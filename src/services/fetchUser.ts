import { UserSettings } from "@/store/useUserStore";

export const getUser = (): Promise<UserSettings | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = localStorage.getItem("user-store");
      if (!user) return resolve(null);

      try {
        const parsed = JSON.parse(user);
        if (!parsed || typeof parsed !== "object" || !parsed.state) {
          return resolve(null);
        }

        resolve(parsed.state as UserSettings);
      } catch (error) {
        console.error("Failed to fetch user data", error);
        resolve(null);
      }
    }, 200);
  });
};
