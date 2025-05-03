export const flipCoin = async ({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}): Promise<"win" | "lose"> => {
  const responseTime = Math.floor(Math.random() * 2700) + 300;
  await new Promise((res) => setTimeout(res, responseTime));

  const result = Math.random() < 0.5 ? "win" : "lose";
  console.log(currency, amount);

  return result;
};
