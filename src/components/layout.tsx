import { FC, useEffect, useState } from 'react';
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
import { AiOutlineArrowUp } from 'react-icons/ai';
type Props = { children: React.ReactNode };
const Main = styled.main`
  width: 100%;
`;
const ScrollTopButton = styled.a`
  position: sticky;
  left: 90%;
  top: 0;
  right: 0;
  bottom: 8%;
  background-color: rgb(30 41 59);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Layout: FC<Props> = ({ children }) => {
  const { title } = useTitle();
  const { isLightMode } = useToggleTheme();
  const { setNavScroll, setNavVisibility } = useContext(NavbarContext);
  const [scrollIcon, setScrollIcon] = useState(false);
  const changeNavBackground = (e: any) => {
    if (e.currentTarget.scrollTop >= 80) {
      setNavScroll(true);
      setScrollIcon(true);
    } else {
      setNavScroll(false);
      setScrollIcon(false);
    }
  };
  useEffect(() => {
    setNavVisibility(false);
  }, [title]);
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
        <Navbar /> <div id="scrollTop" className="hidden"></div>
        <Main>{children}</Main>
        {scrollIcon && (
          <ScrollTopButton href="#scrollTop">
            <AiOutlineArrowUp className="text-white text-lg" />
          </ScrollTopButton>
        )}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
