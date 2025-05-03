import { Dispatch, SetStateAction } from "react";
import { OutcomeType } from "@/features/betting/types";

type Props = {
  filterOutcome: OutcomeType;
  setFilterOutcome: Dispatch<SetStateAction<OutcomeType>>;
  exactAmount: number;
  setExactAmount: Dispatch<SetStateAction<number>>;
};

export const BetHistoryFilter = ({
  filterOutcome,
  setFilterOutcome,
  exactAmount,
  setExactAmount,
}: Props) => {
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
        type="number"
        value={exactAmount === 0 ? "" : exactAmount}
        onChange={(e) => setExactAmount(Number(e.target.value) || 0)}
        placeholder="Amount"
        className="bg-gray-700 p-2 rounded w-full text-sm"
      />
    </div>
  );
};
