import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';
import styles from '../styles/home.module.css';
import { useToggleTheme } from '../hooks/useToggleTheme';
import Image from 'next/image';
import Techs from '../components/techs';
import { getAllPosts } from '../lib/posts';
import Link from 'next/link';
import Title from '../components/title';
import AboutSection from '../components/aboutSection';
import { PostType } from '../types/postType';

type Props = {
  posts: PostType[];
};

const Home: NextPage<Props> = ({ posts }) => {
  const { setTitle } = useTitle();
  const { isLightMode } = useToggleTheme();
  useEffect(() => {
    setTitle('Home');
  }, []);
  return (
    <div className="container">
      <AboutSection />
      <section className={styles.techs}>
        <Title
        >
          Technologies i use
        </Title>
        <Techs />
      </section>
      <section className={styles.posts}>
        <Title
        >
          Recent Blog Posts
        </Title>
        {posts.map((post, index: React.Key) => (
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

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
