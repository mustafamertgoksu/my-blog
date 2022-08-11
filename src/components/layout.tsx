import { FC, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';
import styles from '../styles/layout.module.css';
import { useTitle } from '../hooks/useTitle';
import { datas } from '../datas/index';
import { useToggleTheme } from '../hooks/useToggleTheme';
import { NavbarContext } from '../context/navbar.context';
import { useContext } from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const Main = styled.main`
  width: 100%;
`;

const Layout: FC<Props> = ({ children }) => {
  const { title } = useTitle();
  const { theme } = useToggleTheme();
  const isLightMode = theme === 'light';
  const { setNavScroll, setNavVisibility } = useContext(NavbarContext);

  const changeNavBackground = (e: any) => {
    if (e.currentTarget.scrollTop >= 80) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    setNavVisibility(false);
  }, [title])

  return (
    <>
      <Head>
        <title>
          {datas.siteTitle} | {title}
        </title>
        <meta name="description" content={datas.siteDescription} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div
        className={isLightMode ? styles.lightWrapper : styles.wrapper}
        onScroll={changeNavBackground}
      >
        <Navbar />
        <Main>{children}</Main>
        <button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
          className="text-2xl my-8 text-white"
        >
          Scroll
        </button>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
