import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';
import { useToggleTheme } from '../hooks/useToggleTheme';
import styles from '../styles/about.module.css';
import { SocialLinks } from '../datas';
import Image from 'next/image';
import Contact from '../components/contact';
import Title from '../components/title';
import AboutSection from '../components/about-section';

const About: NextPage = () => {
  const { setTitle } = useTitle();
  const { isLightMode } = useToggleTheme();
  useEffect(() => {
    setTitle('About');
  }, []);

  return (
    <div className="container">
      <AboutSection />
      <section className={styles.myLinks}>
        <Title>My Links</Title>
        {SocialLinks.map((socialLink) => (
          <a
            className={
              !isLightMode ? styles.socialLink : styles.lightSocialLink
            }
            href={socialLink.link}
          >
            <Image src={socialLink.image} width="32" height="32" />
            <span className={'text-gray-50'}>{socialLink.name}</span>
          </a>
        ))}
      </section>
      <section className={styles.contact}>
        <Title>Contact Me</Title>
        <Contact />
      </section>
    </div>
  );
};

export default About;
