export const flipCoin = async ({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}): Promise<"win" | "lose"> => {
  try {
    const responseTime = Math.floor(Math.random() * 2700) + 300;
    await new Promise((res) => setTimeout(res, responseTime));

    const result = Math.random() < 0.5 ? "win" : "lose";
    console.log(currency, amount);

    return result;
  } catch (error) {
    console.error("An error occurred during the coin flip:", error);
    throw new Error("Coin flip failed. Try again...");
  }
};
