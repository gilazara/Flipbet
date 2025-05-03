import { useState } from "react";
import { useBetSimulation } from "@/features/betting/hooks/useBetSimulation";
import { useBetStore } from "@/features/betting/store/useBetStore";
import { useUserStore } from "@/features/user/store/useUserStore";
import { Currency } from "@/common/types";
import { useQueryClient } from "@tanstack/react-query";

const BettingForm = () => {
  const queryClient = useQueryClient();
  const [amount, setAmount] = useState("10");

  const {
    selectedCurrency,
    martingaleEnabled,
    setSelectedCurrency,
    setMartingaleEnabled,
  } = useBetStore();

  const { balance } = useUserStore();
  const { mutate, isPending } = useBetSimulation();

  const isSubmittable =
    Number(amount) > 0 &&
    Number(amount) <= balance[selectedCurrency as Currency];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmittable && !isPending) {
      mutate(Number(amount), {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["user-details"],
            exact: true,
          });
        },
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-900 text-white rounded-xl max-w-md mx-auto mt-2 space-y-3"
    >
      <h2 className="text-xl md:text-2xl text-center font-bold">Coin Flip</h2>

      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
        className="p-2 bg-gray-700 rounded w-full"
      >
        <option>BTC</option>
        <option>ETH</option>
        <option>SOL</option>
      </select>

      <input
        value={amount}
        type="string"
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 bg-gray-800 rounded w-full"
      />

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={martingaleEnabled}
          onChange={(e) => setMartingaleEnabled(e.target.checked)}
        />
        Use Martingale Strategy
      </label>

      <button
        type="submit"
        disabled={isPending || !isSubmittable}
        className="bg-green-500 p-2 rounded w-full text-white transition-colors duration-200 
             hover:bg-green-600 cursor-pointer 
             disabled:bg-gray-600 disabled:text-gray-300 disabled:cursor-not-allowed"
      >
        {isPending ? "Flipping..." : "Bet"}
      </button>
      {!isSubmittable && amount && (
        <p className="bg-red-100 text-red-700 text-sm px-3 py-2 rounded mt-1">
          ❌ You can't place this bet. Please enter a valid amount within your
          balance.
        </p>
      )}
    </form>
  );
};

export default BettingForm;
