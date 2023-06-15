import type { NextPage } from "next";
import { useToggleTheme } from "../hooks/useToggleTheme";
import Head from "next/head";
import { Datas } from "../datas";

const Travel: NextPage = () => {
  const { isLightMode } = useToggleTheme();
  return (
    <>
      <Head>
        <title>{`${Datas.siteTitle} | Travel`}</title>
      </Head>
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
    </>
  );
};

export default Travel;
