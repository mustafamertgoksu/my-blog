import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTitle } from '../hooks/useTitle';
import { useToggleTheme } from '../hooks/useToggleTheme';
import styles from '../styles/about.module.css';
import { datas } from '../datas';
import TypewriterComponent from 'typewriter-effect';
import Typewriter from 'typewriter-effect';
import Techs from '../components/techs';
import { SocialLinks } from '../datas';
import Image from 'next/image';

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
        <h2 className={!isLightMode ? styles.siteTitle : styles.lightSiteTitle}>
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
          className={!isLightMode ? styles.aboutCard : styles.lightAboutCard}
        >
          {datas.aboutParagraph}
        </div>
      </section>
      <section className={styles.techs}>
        <h2
          className={
            !isLightMode
              ? 'text-gray-50 opacity-50 text-center text-3xl my-4'
              : 'text-neutral-900 text-center text-3xl my-4'
          }
        >
          Technologies i use
        </h2>
        <Techs />
      </section>
      <section className={styles.myLinks}>
        <h2
          className={
            !isLightMode
              ? 'text-gray-50 opacity-50 text-center text-3xl my-4'
              : 'text-neutral-900 text-center text-3xl my-4'
          }
        >
          My Links
        </h2>
        {SocialLinks.map((socialLink) => (
          <a
            className={`my-4 py-3 opacity-80 hover:opacity-95 flex items-center justify-around w-48 rounded bg-neutral-900 ${styles.socialLink}`}
            href={socialLink.link}
          >
            <Image src={socialLink.image} width="32" height="32" />
            <span className={'text-gray-50'}>{socialLink.name}</span>
          </a>
        ))}
      </section>
      <section className={styles.contact}></section>
    </div>
  );
};

export default About;
