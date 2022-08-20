import { createContext, useState } from "react";

interface TitleContextProps {
  title: string;
  setTitle: (title: string) => void;
}

export const TitleContext = createContext({} as TitleContextProps);

export default function TitleProvider(props: any) {
  const [title, setTitle] = useState('Developer');
  return <TitleContext.Provider value={{ title, setTitle }} {...props} />;
}