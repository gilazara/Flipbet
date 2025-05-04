import { useMutation } from "@tanstack/react-query";
import { flipCoin } from "@/features/betting/services/flipCoin";
import { useBetStore } from "@/features/betting/stores/useBetStore";
import { useUserStore } from "@/features/user/store/useUserStore";
import { Currency } from "@/common/types";
import {
  AnimationType,
  useAnimationStore,
} from "@/features/betting/stores/useAnimationStore";

export const useBetSimulation = () => {
  const {
    selectedCurrency,
    addBet,
    martingaleEnabled,
    stopWin,
    stopLoss,
    betHistory,
    setBetAmount,
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

    if (Number(stopLoss) && newTotalProfit <= -Number(stopLoss)) {
      alert("🛑 Stop Loss reached.");
      return;
    }

    if (Number(stopWin) && newTotalProfit >= Number(stopWin)) {
      alert("✅ Stop Win reached.");
      return;
    }

    if (
      !isWin &&
      martingaleEnabled &&
      balance[selectedCurrency as Currency] >= amount * 4
    ) {
      setBetAmount(String(amount * 2));
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
