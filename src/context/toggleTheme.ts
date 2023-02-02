import { createContext, useContext } from "react";
import { themeType } from "../types/themeType";

interface ContextProps {
  theme: themeType;
  toggleTheme: () => void;
  isLightMode: boolean;
}

export const ToggleTheme = createContext({} as ContextProps);
