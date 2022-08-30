import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { useToggleTheme } from "../hooks/useToggleTheme";
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext } from "react";
import { NavbarContext } from "../context/navbar.context";

const Navbar = () => {
  const { toggleTheme, isLightMode } = useToggleTheme();
  const { navScroll, navVisibility, setNavVisibility } = useContext(NavbarContext);

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
            <a>Home</a>
          </Link>
          <Link className={styles.hiddenNavItem} href="/about">
            <a>About</a>
          </Link>
          <Link className={styles.hiddenNavItem} href="/projects">
            <a>Projects</a>
          </Link>
          <Link className={styles.hiddenNavItem} href="/travel">
            <a>Travel</a>
          </Link>
        </nav>
      </div>
      <div className={styles.navleft}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <span
              className={isLightMode ? styles.lightNavLink : styles.navLink}
            >
              <Link href="/">
                <a>Home</a>
              </Link>
            </span>
            <span
              className={isLightMode ? styles.lightNavLink : styles.navLink}
            >
              <Link href="/about">
                <a>About</a>
              </Link>
            </span>
            <span
              className={isLightMode ? styles.lightNavLink : styles.navLink}
            >
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </span>
            <span
              className={isLightMode ? styles.lightNavLink : styles.navLink}
            >
              <Link href="/travel">
                <a>Travel</a>
              </Link>
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
