import CoinFlipForm from "./components/CoinFlipForm";
import UserDetails from "./components/UserDetails";
import BetHistoryList from "./components/BetHistory";
import ScreenAnimation from "./components/UI/Animation";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white font-inter text-lg">
      <ScreenAnimation />
      <h1 className="text-xl md:text-3xl font-bold text-center mb-4">
        🎰 Crypto Bet Simulator
      </h1>
      <UserDetails />
      <CoinFlipForm />
      <BetHistoryList />
    </div>
  );
}
