import { createContext, useState } from "react";

interface NavbarContextProps {
  navScroll: boolean;
  setNavScroll: (navScroll: boolean) => void;
}

export const NavbarContext = createContext({} as NavbarContextProps);

export default function NavbarProvider(props: any) {
  const [navScroll, setNavScroll] = useState(false);
  
  return (
    <NavbarContext.Provider
      value={{ navScroll, setNavScroll }}
      {...props}
    />
  );
}