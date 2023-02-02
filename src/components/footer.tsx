import { useToggleTheme } from "../hooks/useToggleTheme";
import styles from "../styles/footer.module.css";

const Footer = () => {
  const { isLightMode } = useToggleTheme();
  return (
    <footer className="w-full flex flex-col items-center">
      <h2 className={!isLightMode ? styles.footerText : styles.lightFooterText}>
        <span className={styles.spanFirst}>&copy;</span> Made with ❤️ by{" "}
        <span
          className={!isLightMode ? styles.spanSecond : styles.lightSpanSecond}
        >
          <a
            href="https://github.com/mustafamertgoksu"
            target="blank"
            rel="noreferrer"
          >
            Mustafa Mert Goksu{" "}
          </a>
        </span>
        using{" "}
        <span
          className={!isLightMode ? styles.spanThird : styles.lightSpanThird}
        >
          <a href="https://nextjs.org/" target="blank" rel="noreferrer">
            Next.js
          </a>
        </span>
      </h2>
    </footer>
  );
};

export default Footer;
