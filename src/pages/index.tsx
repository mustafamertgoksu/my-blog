import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTitle } from '../hooks/useTitle';
import styles from '../styles/home.module.css';
import { useToggleTheme } from '../hooks/useToggleTheme';
import { datas } from '../datas';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import TypewriterComponent from 'typewriter-effect';
import Techs from '../components/techs';
import { getAllPosts } from '../lib/posts';
import Link from 'next/link';
import aboutStyles from '../styles/about.module.css';

type Props = {
  posts: [];
};

const Home: NextPage<Props> = ({ posts }) => {
  const { setTitle } = useTitle();
  const { isLightMode } = useToggleTheme();
  useEffect(() => {
    setTitle('Home');
  }, []);
  return (
    <div className="container">
      <section className={aboutStyles.aboutSection}>
        <h2
          className={
            !isLightMode ? aboutStyles.siteTitle : aboutStyles.lightSiteTitle
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
            !isLightMode ? aboutStyles.aboutCard : aboutStyles.lightAboutCard
          }
        >
          {datas.aboutParagraph}
        </div>
      </section>
      <section className={aboutStyles.techs}>
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
      <section className={styles.posts}>
        <h2
          className={!isLightMode ? styles.postsTitle : styles.lightPostsTitle}
        >
          Recent Blog Posts
        </h2>
        {posts.map((post: any, index: any) => (
          <div key={index}>
            <Link href={`/content/${post.slug}`}>
              <div
                className={
                  !isLightMode ? styles.postCard : styles.lightPostCard
                }
                onClick={() => setTitle(post.title)}
              >
                <div className="flex">
                  <Image
                    src={post.image}
                    className={styles.postImage}
                    alt={post.title}
                    width="30"
                    height="30"
                  />
                  <span className="text-white mx-3">{post.title}</span>
                </div>
                <div className="flex justify-center">
                  <h3 className="text-center text-white">Date: &nbsp;</h3>
                  <h4 className="text-center text-green-600">{post.date}</h4>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
