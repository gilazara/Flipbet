import { useUserStore } from "@/store/useUserStore";

const Balance = () => {
  const { balance } = useUserStore();

  return (
    <div className="bg-gray-800 py-2 rounded-xl shadow-lg text-white space-y-2 mt-4">
      <h2 className="text-sm md:text-lg font-semibold text-amber-200">
        💰 Balance
      </h2>
      <ul className="space-y-1 text-sm md:text-lg">
        {Object.entries(balance).map(([currency, amount]) => {
          const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
            16
          )}`;

          return (
            <li
              key={currency}
              className="flex gap-4"
              style={{ color: randomColor }}
            >
              <span>{currency}</span>
              <span className="font-medium">{amount.toFixed(2)} Credits</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Balance;
