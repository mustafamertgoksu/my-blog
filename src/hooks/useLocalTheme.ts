import { useEffect, useState } from "react";
import { themeType } from "../types/themeType";

export const useLocalTheme = () => {
  const [theme, setTheme] = useState<themeType>("dark");

  const toggleTheme = () => {
    const changeTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", changeTheme);
    setTheme(changeTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme as themeType);
  }, []);

  return {
    theme,
    toggleTheme,
  };
};
