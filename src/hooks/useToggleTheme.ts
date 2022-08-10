import { useContext } from "react";
import { ToggleTheme } from "../context/toggleTheme";

export function useToggleTheme() {
  return useContext(ToggleTheme);
}