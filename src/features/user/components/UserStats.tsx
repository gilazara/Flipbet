import { useBetHistory } from "@/features/betting/hooks/useBetHistory";

const UserStats = () => {
  const { wins, losses, profit, biggestLoss, biggestWin, totalBets } =
    useBetHistory();

  return (
    <div className="bg-gray-900 text-emerald-50 rounded-xl">
      <div className="p-3 md:py-3 md:px-6 space-y-3 text-[14px] md:text-[16px] text-cyan-50">
        <h3 className="font-semibold text-sm md:text-xl text-white mb-2">
          Statistics
        </h3>
        <p>
          ✅ Win/Loss: {wins} / {losses}
        </p>
        <p>🏆 Biggest Win: {biggestWin} credits</p>
        <p>💥 Biggest Loss: {biggestLoss} credits</p>
        <p>📈 Current Profit / Loss: {profit} credits</p>
        <p>🎰 Total Bets Placed: {totalBets}</p>
      </div>
    </div>
  );
};

export default UserStats;
