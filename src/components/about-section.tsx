import Typewriter from 'typewriter-effect';
import TypewriterComponent from 'typewriter-effect';
import { Datas } from '../datas';
import styles from '../styles/about.module.css';
import { useToggleTheme } from '../hooks/useToggleTheme';

const AboutSection = () => {
  const { isLightMode } = useToggleTheme();
  return (
    <section className={styles.aboutSection}>
      <h2 className={!isLightMode ? styles.siteTitle : styles.lightSiteTitle}>
        👋 Hey, {"I'm"}&nbsp;
        <div>
          <TypewriterComponent
            onInit={(typeWriter) =>
              typeWriter.typeString(Datas.siteTitle).start()
            }
          />
        </div>
      </h2>
      <h2
        className={
          !isLightMode
            ? 'my-5 text-2xl text-green-600'
            : 'my-5 text-2xl text-green-900'
        }
      >
        Who Am I?
      </h2>
      <div className={!isLightMode ? styles.aboutCard : styles.lightAboutCard}>
        {Datas.aboutParagraph}
      </div>
    </section>
  );
};

export default AboutSection;
