import { useBetStore } from "@/features/betting/store/useBetStore";

export const useBetHistory = () => {
  const { betHistory } = useBetStore();

  const profit = betHistory.reduce((acc, bet) => {
    return acc + (bet.outcome === "win" ? bet.amount : -bet.amount);
  }, 0);

  const biggestWin = Math.max(
    ...betHistory.filter((bet) => bet.outcome === "win").map((el) => el.amount),
    0
  );
  const biggestLoss = Math.max(
    ...betHistory
      .filter((bet) => bet.outcome === "lose")
      .map((el) => el.amount),
    0
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
