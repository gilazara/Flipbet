// store/useAnimationStore.ts
import { create } from "zustand";

export type AnimationType = "win" | "lose" | null;

interface AnimationState {
  animation: AnimationType;
  triggerAnimation: (type: AnimationType) => void;
  clearAnimation: () => void;
}

export const useAnimationStore = create<AnimationState>((set) => ({
  animation: null,
  triggerAnimation: (type) => set({ animation: type }),
  clearAnimation: () => set({ animation: null }),
}));
