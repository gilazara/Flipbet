import { useState } from "react";
import { useBetSimulation } from "@/hooks/useBetSimulation";
import classNames from "classnames";
import { useUserStore } from "@/store/useUserStore";
import { useBetStore } from "@/store/useBetStore";
import { Currency } from "@/types";

const CoinFlipForm = () => {
  const [amount, setAmount] = useState(100);

  const {
    selectedCurrency,
    martingaleEnabled,
    setSelectedCurrency,
    setMartingaleEnabled,
  } = useBetStore();

  const { balance } = useUserStore();

  const { mutate, isPending } = useBetSimulation();

  const isSubmittable =
    amount > 0 && amount <= balance[selectedCurrency as Currency];

  return (
    <div className="p-4 bg-gray-900 text-white rounded-xl max-w-md mx-auto mt-2 space-y-3">
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
        type="number"
        value={amount === 0 ? "" : amount}
        onChange={(e) => setAmount(Number(e.target.value))}
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
        onClick={() => mutate(amount)}
        className={classNames(
          "bg-green-500 p-2 rounded w-full cursor-pointer",
          { "opacity-50 cursor-not-allowed": !isSubmittable }
        )}
        disabled={isPending || !isSubmittable}
      >
        {isPending ? "Flipping..." : "Bet"}
      </button>
    </div>
  );
};

export default CoinFlipForm;
