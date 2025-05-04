import { Dispatch, SetStateAction } from "react";
import { OutcomeType } from "@/features/betting/types";

type BetHistoryFilterProps = {
  filterOutcome: OutcomeType;
  setFilterOutcome: Dispatch<SetStateAction<OutcomeType>>;
  exactAmount: string;
  setExactAmount: Dispatch<SetStateAction<string>>;
};

export const BetHistoryFilter = ({
  filterOutcome,
  setFilterOutcome,
  exactAmount,
  setExactAmount,
}: BetHistoryFilterProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      <select
        value={filterOutcome}
        onChange={(e) => setFilterOutcome(e.target.value as OutcomeType)}
        className="bg-gray-700 p-2 rounded text-sm"
      >
        <option value="all">All</option>
        <option value="win">Wins</option>
        <option value="lose">Losses</option>
      </select>

      <input
        type="text"
        value={exactAmount}
        onChange={(e) => setExactAmount(e.target.value)}
        placeholder="Amount"
        className="bg-gray-700 p-2 rounded w-full text-sm"
      />
    </div>
  );
};
