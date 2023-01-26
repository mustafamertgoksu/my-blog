import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';
import styles from '../styles/home.module.css';
import { useToggleTheme } from '../hooks/useToggleTheme';
import Image from 'next/image';
import { getAllPosts } from '../lib/posts';
import Link from 'next/link';
import Title from '../components/title';
import { PostType } from '../types/postType';
import Typewriter from 'typewriter-effect';
import TypewriterComponent from 'typewriter-effect';
import { Datas } from '../datas';
import Contact from '../components/contact';


type Props = {
  posts: PostType[];
};

const Home: NextPage<Props> = ({ posts }) => {
  const { setTitle } = useTitle();
  const { isLightMode, toggleTheme } = useToggleTheme();
  useEffect(() => {
    setTitle('Home');
  }, []);

  const contentTheme = () => {
    isLightMode ? toggleTheme() : null
  }

  return (
    <div className="container">
      <section className={"w-full flex flex-col items-center"}>
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
      <p className={!isLightMode ? "text-center text-slate-400 cursor-default select-none mb-3 text-xl font-bold" : "text-center text-black cursor-default select-none mb-5 font-bold text-xl"}> I'm introduce myself at <Link href={"/about"} className={!isLightMode ? "text-green-400" : "text-green-800"}>About</Link> page </p>
      </section>
      <section className={styles.posts}>
        <Title
        >
          Recent Blog Posts
        </Title>
        {posts.map((post, index: React.Key) => (
          <div key={index} onClick={contentTheme}>
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
      <section className={styles.contact}>
        <Title>Contact Me</Title>
        <Contact />
      </section>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
