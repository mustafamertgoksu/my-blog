import { FC } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';
import styles from '../styles/layout.module.css';
import { useTitle } from '../hooks/useTitle';
import { datas } from '../datas/index';
import { useToggleTheme } from '../hooks/useToggleTheme';
import { NavbarContext } from '../context/navbar.context';
import { useContext } from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { title } = useTitle();
  const { theme } = useToggleTheme();
  const isLightMode = theme === 'light';
  const { setNavScroll } = useContext(NavbarContext);

  const changeNavBackground = (e: any) => {
    if (e.currentTarget.scrollTop >= 80) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

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
        <main style={{ width: '100%' }}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
