import { create } from "zustand";

interface IMainSettings {
  name: string;
  title: string;
  icon: string | null;
  isIcon: boolean;
  setSettingsData: (
    name: string,
    title: string,
    icon: string,
    isIcon: boolean,
  ) => void;
}

const useMainSettingsStore = create<IMainSettings>(set => ({
  name: "",
  title: "",
  icon: null,
  isIcon: false,
  setSettingsData: (name, title, icon, isIcon) =>
    set({ name, title, icon, isIcon }),
}));

export default useMainSettingsStore;
