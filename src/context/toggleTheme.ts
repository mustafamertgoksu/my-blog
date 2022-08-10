import { createContext, useContext } from "react";
import { themeType } from "../types/themeType";

interface ContextProps {
  theme: themeType;
  toggleTheme: () => void;
}

export const ToggleTheme = createContext({} as ContextProps);
