import "../styles/globals.css";
import Layout from "../components/layout";
import type { AppProps } from "next/app";
import TitleProvider from "../context/title.context";
import { ToggleTheme } from "../context/toggleTheme";
import { useLocalTheme } from "../hooks/useLocalTheme";
import NavbarProvider from "../context/navbar.context";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useLocalTheme();
  const isLightMode = theme === "light";
  return (
      <ToggleTheme.Provider value={{ theme, toggleTheme, isLightMode }}>
        <TitleProvider>
          <NavbarProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NavbarProvider>
        </TitleProvider>
      </ToggleTheme.Provider>
  );
}

export default MyApp;
