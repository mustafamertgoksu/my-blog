import type { NextPage } from "next";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";
import { useToggleTheme } from "../hooks/useToggleTheme";

const Travel: NextPage = () => {
  const { setTitle } = useTitle();
  const { theme } = useToggleTheme();
  const isLightMode = theme === "light";
  useEffect(() => {
    setTitle("Travel");
  }, []);
  return (
    <main className="container">
      <h1
        className={
          !isLightMode
            ? 'text-center my-3 text-3xl text-white'
            : 'text-center my-3 text-3xl text-black'
        }
      >
        Travel
      </h1>
      <h3
        className={
          !isLightMode
            ? 'text-center my-3 text-2xl text-white'
            : 'text-center my-3 text-2xl text-black'
        }
      >
        As Soon
      </h3>
    </main>
  );
};

export default Travel;
