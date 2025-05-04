import { useState } from "react";
import { useDebounce } from "@/common/hooks/useDebounce";
import { useBetHistory } from "@/features/betting/hooks/useBetHistory";
import { BetHistoryFilter } from "./BetHistoryFilter";
import { OutcomeType } from "@/features/betting/types";
import classNames from "classnames";

const BetHistoryList = () => {
  const { betHistory } = useBetHistory();

  const [exactAmount, setExactAmount] = useState("");
  const [filterOutcome, setFilterOutcome] = useState<OutcomeType>("all");

  const debouncedExactAmount = useDebounce(exactAmount, 300);

  if (!betHistory.length) return null;

  const filteredBets = betHistory.filter((bet) => {
    const outcomeMatch =
      filterOutcome === "all" || bet.outcome === filterOutcome;

    const amountMatch =
      Number(debouncedExactAmount) === 0 ||
      bet.amount === Number(debouncedExactAmount);

    return outcomeMatch && amountMatch;
  });

  return (
    <div className="bg-gray-800 text-white p-4 rounded mt-4 max-w-md mx-auto">
      <h3 className="text-lg font-bold mb-4">Bet History</h3>

      <BetHistoryFilter
        filterOutcome={filterOutcome}
        setFilterOutcome={setFilterOutcome}
        exactAmount={exactAmount}
        setExactAmount={setExactAmount}
      />

      <table className="w-full text-sm text-left text-gray-400">
        <thead className="font-bold uppercase">
          <tr className="grid grid-cols-4 gap-4 mb-3">
            <th className="col-span-1">Time</th>
            <th className="col-span-1">Currency</th>
            <th className="col-span-1">Bet</th>
            <th className="col-span-1">Result</th>
          </tr>
        </thead>
        <tbody className="space-y-1">
          {filteredBets.length ? (
            filteredBets.map((bet, i) => (
              <tr
                key={i}
                className="grid grid-cols-4 gap-4 mb-2 text-sm uppercase"
              >
                <td>{new Date(bet.timestamp).toLocaleTimeString()}</td>
                <td>{bet.currency}</td>
                <td>{bet.amount}</td>
                <td
                  className={classNames({
                    "text-green-600/80": bet.outcome === "win",
                    "text-red-600/80": bet.outcome !== "win",
                  })}
                >
                  {bet.outcome}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-2">
                No bets match these filters.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BetHistoryList;
