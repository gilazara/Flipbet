import { useEffect } from "react";
import classNames from "classnames";
import { useAnimationStore } from "@/features/betting/stores/useAnimationStore";

const BettingAnimation = () => {
  const { animation, clearAnimation } = useAnimationStore();

  useEffect(() => {
    if (animation) {
      const timeout = setTimeout(() => clearAnimation(), 1500);

      return () => clearTimeout(timeout);
    }
  }, [animation, clearAnimation]);

  if (!animation) return null;

  return (
    <div
      className={classNames(
        "fixed inset-0 z-50 flex items-center justify-center text-white text-5xl font-bold",
        "transition-opacity duration-500",
        {
          "bg-green-600/80 animate-pulse": animation === "win",
          "bg-red-600/80 animate-pulse": animation === "lose",
        }
      )}
    >
      {animation === "win" ? "🎉 WIN!" : "💥 LOSS!"}
    </div>
  );
};

export default BettingAnimation;
