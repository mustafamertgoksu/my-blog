import type { NextPage } from "next";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

const Travel: NextPage = () => {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("Travel");
  }, []);
  return <main></main>;
};

export default Travel;
