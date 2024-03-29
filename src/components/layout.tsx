import { FC, useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/layout.module.css";
import { useToggleTheme } from "../hooks/useToggleTheme";
import { NavbarContext } from "../context/navbar.context";
import { useContext } from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useRouter } from "next/router";

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ScrollTopButton = styled.a`
  position: sticky;
  left: 90%;
  top: 0;
  right: 0;
  bottom: 8%;
  background-color: rgb(20 30 40);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  @media (max-width: 768px) {
    display: none;
  }
`;

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
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

  const router = useRouter();

  useEffect(() => {
    setNavVisibility(false);
  }, [router.pathname]);

  return (
    <div
      className={isLightMode ? styles.lightWrapper : styles.wrapper}
      onScroll={changeNavBackground}
    >
      <div id="#" className="hidden"></div>
      <Navbar />
      <Main>{children}</Main>
      {scrollIcon && (
        <ScrollTopButton href="##">
          <AiOutlineArrowUp className="text-white text-lg" />
        </ScrollTopButton>
      )}
      <Footer />
    </div>
  );
};
export default Layout;
