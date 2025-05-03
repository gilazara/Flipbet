import BettingForm from "@/features/betting/components";
import UserDetails from "@/features/user/components";
import BetHistoryList from "@/features/betting/components/BetHistoryList";
import BettingAnimation from "@/features/betting/components/BettingAnimation";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white font-inter text-lg">
      <BettingAnimation />
      <h1 className="text-xl md:text-3xl font-bold text-center mb-4">
        🎰 Crypto Bet Simulator
      </h1>
      <UserDetails />
      <BettingForm />
      <BetHistoryList />
    </div>
  );
}
