import { useContext } from "react";
import { TitleContext } from "../context/title.context";

export const useTitle = () => useContext(TitleContext);