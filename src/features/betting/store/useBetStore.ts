import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Bet } from "@/common/types";

type State = {
  selectedCurrency: string;
  betHistory: Bet[];
  martingaleEnabled: boolean;
  stopWin: string;
  stopLoss: string;
  betAmount: string;
};

type Actions = {
  setSelectedCurrency: (currency: string) => void;
  addBet: (bet: Bet) => void;
  setMartingaleEnabled: (value: boolean) => void;
  setStopWin: (value: string) => void;
  setStopLoss: (value: string) => void;
  setBetAmount: (value: string) => void;
  reset: () => void;
};

export const useBetStore = create<State & Actions>()(
  persist(
    (set) => ({
      selectedCurrency: "BTC",
      betHistory: [],
      martingaleEnabled: false,
      stopWin: "0",
      stopLoss: "0",
      betAmount: "10",
      setSelectedCurrency: (currency) => set({ selectedCurrency: currency }),
      addBet: (bet) =>
        set((state) => ({
          betHistory: [bet, ...state.betHistory].slice(0, 20),
        })),
      setMartingaleEnabled: (value) => set({ martingaleEnabled: value }),
      setStopWin: (value) => set({ stopWin: value }),
      setStopLoss: (value) => set({ stopLoss: value }),
      setBetAmount: (value) => set({ betAmount: value }),
      reset: () =>
        set({
          selectedCurrency: "BTC",
          betHistory: [],
          martingaleEnabled: false,
          stopWin: "0",
          stopLoss: "0",
          betAmount: "0",
        }),
    }),
    { name: "bet-store" }
  )
);
