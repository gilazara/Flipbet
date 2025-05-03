import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UserSettings, UserState } from "@/features/user/types";
import { Currency } from "@/common/types";

type UserActions = {
  setPreferredCurrency: (currency: Currency) => void;
  setBalance: (currency: keyof UserSettings["balance"], amount: number) => void;
  resetUser: () => void;
  setHasHydrated: (state: boolean) => void;
};

const defaultSettings: UserSettings = {
  firstName: "John",
  lastName: "Doe",
  preferredCurrency: "BTC",
  balance: {
    BTC: 1000,
    ETH: 1000,
    SOL: 1000,
  },
};

export const useUserStore = create<UserState & UserActions>()(
  persist(
    (set) => ({
      ...defaultSettings,
      hasHydrated: false,
      setPreferredCurrency: (currency) => set({ preferredCurrency: currency }),
      setBalance: (currency, amount) =>
        set((state) => ({
          balance: {
            ...state.balance,
            [currency]: state.balance[currency] + amount,
          },
        })),
      resetUser: () => set({ ...defaultSettings }),
      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
