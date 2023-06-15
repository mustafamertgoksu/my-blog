import type { NextPage } from "next";
import { useToggleTheme } from "../hooks/useToggleTheme";
import styles from "../styles/about.module.css";
import { SocialLinks } from "../datas";
import Image from "next/image";
import Title from "../components/title";
import AboutSection from "../components/about-section";
import Techs from "../components/techs";
import Head from "next/head";
import { Datas } from "../datas";

const About: NextPage = () => {
  const { isLightMode } = useToggleTheme();
  return (
    <>
      <Head>
        <title>{`${Datas.siteTitle} | About`}</title>
      </Head>
      <div className="container">
        <AboutSection />
        <section className={styles.techs}>
          <Title>Technologies i use</Title>
          <Techs />
        </section>
        <section className={styles.myLinks}>
          <Title>My Links</Title>
          <div className={styles.links}>
            {SocialLinks.map((socialLink, index) => (
              <a
                className={
                  !isLightMode ? styles.socialLink : styles.lightSocialLink
                }
                href={socialLink.link}
                key={index}
              >
                <Image
                  src={socialLink.image}
                  width="32"
                  height="32"
                  alt={socialLink.name}
                />
                <span className={'text-gray-50'}>{socialLink.name}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
