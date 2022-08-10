import type { NextPage } from "next";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

const About: NextPage = () => {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("About");
  }, []);
  return <main></main>;
};

export default About;
