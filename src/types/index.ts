export type Bet = {
  currency: string;
  amount: number;
  outcome: "win" | "lose";
  timestamp: string;
};

export type Balances = {
  BTC: number;
  ETH: number;
  SOL: number;
};

export type Currency = "BTC" | "ETH" | "SOL";
