import "../styles/globals.css";
import Layout from "../components/layout";
import type { AppProps } from "next/app";
import { ToggleTheme } from "../context/toggleTheme";
import { useLocalTheme } from "../hooks/useLocalTheme";
import NavbarProvider from "../context/navbar.context";
import Head from "next/head";
import { Datas } from "../datas";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useLocalTheme();
  const isLightMode = theme === "light";
  return (
    <>
      <Head>
        <title>{Datas.siteTitle}</title>
        <meta name="description" content={Datas.siteDescription} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ToggleTheme.Provider value={{ theme, toggleTheme, isLightMode }}>
        <NavbarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavbarProvider>
      </ToggleTheme.Provider>
    </>
  );
}

export default MyApp;
