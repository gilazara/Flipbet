import { useMemo } from "react";
import { useBetStore } from "@/features/betting/stores/useBetStore";

const getBiggestAmountByOutcome = (
  bets: { outcome: string; amount: number }[],
  outcomeType: "win" | "lose"
): number => {
  return Math.max(
    ...bets.filter((bet) => bet.outcome === outcomeType).map((el) => el.amount),
    0
  );
};

export const useBetHistory = () => {
  const { betHistory } = useBetStore();

  const profit = betHistory.reduce((acc, bet) => {
    return acc + (bet.outcome === "win" ? bet.amount : -bet.amount);
  }, 0);

  const biggestWin = useMemo(
    () => getBiggestAmountByOutcome(betHistory, "win"),
    [betHistory]
  );
  const biggestLoss = useMemo(
    () => getBiggestAmountByOutcome(betHistory, "lose"),
    [betHistory]
  );

  const totalBets = betHistory.length;
  const wins = betHistory.filter((bet) => bet.outcome === "win").length;
  const losses = totalBets - wins;

  return {
    wins,
    losses,
    profit,
    totalBets,
    biggestWin,
    betHistory,
    biggestLoss,
  };
};
