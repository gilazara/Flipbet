import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Bet } from "@/common/types";

type State = {
  selectedCurrency: string;
  betHistory: Bet[];
  martingaleEnabled: boolean;
  stopWin: number;
  stopLoss: number;
};

type Actions = {
  setSelectedCurrency: (currency: string) => void;
  addBet: (bet: Bet) => void;
  setMartingaleEnabled: (value: boolean) => void;
  setStopWin: (value: number) => void;
  setStopLoss: (value: number) => void;
  reset: () => void;
};

export const useBetStore = create<State & Actions>()(
  persist(
    (set) => ({
      selectedCurrency: "BTC",
      betHistory: [],
      martingaleEnabled: false,
      stopWin: 0,
      stopLoss: 0,
      setSelectedCurrency: (currency) => set({ selectedCurrency: currency }),
      addBet: (bet) =>
        set((state) => ({
          betHistory: [bet, ...state.betHistory].slice(0, 20),
        })),
      setMartingaleEnabled: (value) => set({ martingaleEnabled: value }),
      setStopWin: (value) => set({ stopWin: value }),
      setStopLoss: (value) => set({ stopLoss: value }),
      reset: () =>
        set({
          selectedCurrency: "BTC",
          betHistory: [],
          martingaleEnabled: false,
          stopWin: 0,
          stopLoss: 0,
        }),
    }),
    { name: "bet-store" }
  )
);
