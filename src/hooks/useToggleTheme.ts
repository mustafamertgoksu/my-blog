import { useContext } from "react";
import { ToggleTheme } from "../context/toggleTheme";

export const useToggleTheme = () => {
  return useContext(ToggleTheme);
}