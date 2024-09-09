import { create } from "zustand";

interface IThemeSettings {
  appHeaderColor: string;
  appHeaderTextColor: string;
  isAppHeader: boolean;
  appBackgroundColor: string;
  appBackgroundImage: string;
  isAppSearch: boolean;
  setThemeSettings: (data: IThemeSettings) => void;
}

const useThemeSettings = create<IThemeSettings>(set => ({
  appHeaderColor: "",
  appHeaderTextColor: "",
  isAppHeader: true,
  appBackgroundColor: "",
  appBackgroundImage: "",
  isAppSearch: false,
  setThemeSettings: (data: IThemeSettings) => {
    set(state => ({ ...state, ...data }));
  },
}));

export default useThemeSettings;
