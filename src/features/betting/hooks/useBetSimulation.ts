import { useMutation } from "@tanstack/react-query";
import { flipCoin } from "@/features/betting/service/flipCoin";
import { useBetStore } from "@/features/betting/store/useBetStore";
import { useUserStore } from "@/features/user/store/useUserStore";
import { Currency } from "@/common/types";
import {
  AnimationType,
  useAnimationStore,
} from "@/features/betting/store/useAnimationStore";

export const useBetSimulation = () => {
  const {
    selectedCurrency,
    addBet,
    martingaleEnabled,
    stopWin,
    stopLoss,
    betHistory,
    setAmount,
  } = useBetStore();

  const { setBalance, balance } = useUserStore();
  const { triggerAnimation } = useAnimationStore();

  const placeBet = async (amount: number, accProfit = 0) => {
    const result = await flipCoin({ amount, currency: selectedCurrency });
    const isWin = result === "win";
    const profit = isWin ? amount : -amount;

    triggerAnimation(result as AnimationType);
    setBalance(selectedCurrency as Currency, profit);

    addBet({
      currency: selectedCurrency,
      amount,
      outcome: result,
      timestamp: new Date().toISOString(),
    });

    const newTotalProfit =
      betHistory.reduce((acc, bet) => {
        const val = bet.outcome === "win" ? bet.amount : -bet.amount;
        return acc + val;
      }, 0) + profit;

    if (stopLoss && newTotalProfit <= -stopLoss) {
      alert("🛑 Stop Loss reached.");
      return;
    }

    if (stopWin && newTotalProfit >= stopWin) {
      alert("✅ Stop Win reached.");
      return;
    }

    if (
      !isWin &&
      martingaleEnabled &&
      balance[selectedCurrency as Currency] >= amount * 4
    ) {
      setAmount(String(amount * 2));
      await placeBet(amount * 2, newTotalProfit);
    }
  };

  const mutationFn = useMutation({
    mutationFn: async (amount: number) => {
      await placeBet(amount);
    },
  });

  return mutationFn;
};
