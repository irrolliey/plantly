import { create } from "zustand";

type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHadOnboarder: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  hasFinishedOnboarding: false,
  toggleHadOnboarder: () =>
    set((state) => ({
      hasFinishedOnboarding: !state.hasFinishedOnboarding,
    })),
}));
