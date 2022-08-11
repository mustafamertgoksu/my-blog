import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';
import { useToggleTheme } from '../hooks/useToggleTheme';
import styles from '../styles/about.module.css'
import { datas } from '../datas';
import TypewriterComponent from 'typewriter-effect';
import Typewriter from 'typewriter-effect';

const About: NextPage = () => {
  const { setTitle } = useTitle();
  const { theme } = useToggleTheme();
  const isLightMode = theme === 'light';
  useEffect(() => {
    setTitle('About');
  }, []);
  return (
    <div className="container">
      <section className={styles.aboutSection}>
        <h2
          className={
            !isLightMode ? styles.siteTitle : styles.lightSiteTitle
          }
        >
          👋 Hey, {"I'm  "}
          <div className="mx-2">
            <TypewriterComponent
              onInit={(typeWriter) =>
                typeWriter.typeString(datas.siteTitle).start()
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
        <div
          className={
            !isLightMode ? styles.aboutCard : styles.lightAboutCard
          }
        >
          {datas.aboutParagraph}
        </div>
      </section>
      <section className={styles.myLinks}>

      </section>
      <section className={styles.contact}>

      </section>
    </div>
  );
};

export default About;
