import type { NextPage } from "next";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

const Projects: NextPage = () => {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("Projects");
  }, []);
  return <main></main>;
};

export default Projects;
