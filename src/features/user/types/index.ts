import { Currency } from "@/common/types";

export type UserSettings = {
  firstName: string;
  lastName: string;
  preferredCurrency: Currency;
  balance: Record<Currency, number>;
};

export type UserState = UserSettings & {
  hasHydrated: boolean;
};
