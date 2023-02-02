import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { useToggleTheme } from "../hooks/useToggleTheme";
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext } from "react";
import { NavbarContext } from "../context/navbar.context";

const Navbar = () => {
  const { toggleTheme, isLightMode } = useToggleTheme();
  const { navScroll, navVisibility, setNavVisibility } =
    useContext(NavbarContext);

  const toggleNav = () => {
    if (!navVisibility) {
      setNavVisibility(true);
    } else {
      setNavVisibility(false);
    }
  };

  return (
    <nav
      className={
        !isLightMode && navScroll
          ? styles.scrolledNav
          : isLightMode && navScroll
          ? styles.scrolledLightNavbar
          : isLightMode && !navScroll
          ? styles.lightNavbar
          : styles.navbar
      }
    >
      <div className={styles.hiddenNavLeft}>
        <button onClick={toggleNav} aria-label="toggleNav">
          <HiMenuAlt1
            className={isLightMode ? styles.lightNavIcon : styles.navIcon}
          />
        </button>
        <nav className={navVisibility ? styles.showNav : styles.hiddenNav}>
          <Link className={styles.hiddenNavItem} href="/">
            Home
          </Link>
          <Link className={styles.hiddenNavItem} href="/about">
            About
          </Link>
          <Link className={styles.hiddenNavItem} href="/projects">
            Projects
          </Link>
          <Link className={styles.hiddenNavItem} href="/travel">
            Travel
          </Link>
        </nav>
      </div>
      <div className={styles.navleft}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <span
              className={isLightMode ? styles.lightNavLink : styles.navLink}
            >
              <Link href="/">Home</Link>
            </span>
            <span
              className={isLightMode ? styles.lightNavLink : styles.navLink}
            >
              <Link href="/about">About</Link>
            </span>
            <span
              className={isLightMode ? styles.lightNavLink : styles.navLink}
            >
              <Link href="/projects">Projects</Link>
            </span>
            <span
              className={isLightMode ? styles.lightNavLink : styles.navLink}
            >
              <Link href="/travel">Travel</Link>
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.navRight}>
        <button
          title="change theme"
          onClick={toggleTheme}
          className={
            isLightMode ? styles.lightModeToggleBtn : styles.modeToggleBtn
          }
        >
          {isLightMode ? <BsMoonFill /> : <BsSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
