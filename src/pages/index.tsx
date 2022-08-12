import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTitle } from '../hooks/useTitle';
import styles from '../styles/home.module.css';
import { useToggleTheme } from '../hooks/useToggleTheme';
import { datas } from '../datas';
import axios from 'axios';
import { githubRepositoriesURL } from '../datas';
import { AiFillStar } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import ContentLoader from 'react-content-loader';
import { topProjects } from '../datas';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import TypewriterComponent from 'typewriter-effect';
import Techs from '../components/techs';
import { getAllPosts } from '../lib/posts';
import Link from 'next/link';
import aboutStyles from '../styles/about.module.css';

type Props = {
  posts: any;
};

const Home: NextPage<Props> = ({ posts }) => {
  const { setTitle } = useTitle();
  const { theme } = useToggleTheme();
  const isLightMode = theme === 'light';
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const searchRepos = async () => {
    setLoading(true);
    const res = await axios.get(githubRepositoriesURL);
    setLoading(false);
    setRepos(res.data);
  };
  useEffect(() => {
    setTitle('Home');
    searchRepos();
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
      <h2
        className={
          !isLightMode
            ? 'text-center text-3xl text-neutral-300 opacity-70'
            : 'text-center text-3xl text-black opacity-90'
        }
      >
        Top Projects
      </h2>
      <section className="flex flex-col items-center my-5">
        {loading ? (
          <>
            <ContentLoader
              speed={2}
              width={400}
              height={160}
              viewBox="0 0 400 160"
              backgroundColor="#000010"
              foregroundColor="#111"
            >
              <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
              <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
              <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
              <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
              <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
              <circle cx="20" cy="20" r="20" />
            </ContentLoader>
            <ContentLoader
              speed={2}
              width={400}
              height={160}
              viewBox="0 0 400 160"
              backgroundColor="#000010"
              foregroundColor="#111"
            >
              <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
              <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
              <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
              <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
              <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
              <circle cx="20" cy="20" r="20" />
            </ContentLoader>
            <ContentLoader
              speed={2}
              width={400}
              height={160}
              viewBox="0 0 400 160"
              backgroundColor="#000010"
              foregroundColor="#111"
            >
              <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
              <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
              <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
              <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
              <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
              <circle cx="20" cy="20" r="20" />
            </ContentLoader>
          </>
        ) : (
          <div className="">
            {topProjects.map((repo: any) => (
              <a
                href={repo.html_url}
                key={repo.name}
                target="blank"
                rel="noreferrer"
                className={isLightMode ? styles.lightProject : styles.project}
              >
                <div
                  className={
                    isLightMode
                      ? 'bg-zinc-800 my-4 rounded flex flex-col justify-center h-48'
                      : 'bg-black opacity-60 my-4 rounded flex flex-col justify-center h-48 border-2 transition-all border-slate-500 hover:border-white hover:opacity-80'
                  }
                >
                  <header className="flex justify-between px-4">
                    <span
                      className={
                        isLightMode
                          ? 'text-xl text-green-600'
                          : 'text-xl text-green-700'
                      }
                    >
                      {repo.name}
                    </span>
                    <BsGithub className="text-2xl text-white" />
                  </header>
                  <main
                    className={
                      isLightMode
                        ? 'px-6 py-4 text-blue-500'
                        : 'px-6 py-4 text-blue-500'
                    }
                  >
                    {repo.description}
                  </main>
                  <footer className="flex items-center justify-between px-4">
                    <span className="text-gray-50 flex gap-2">
                      <Image src={repo.image} width="23" height="20" alt="" />
                      {repo.language}
                    </span>
                    <span className="text-white flex items-center gap-2">
                      {repo.stargazers_count}
                      <AiFillStar className="text-amber-500" />
                    </span>
                  </footer>
                </div>
              </a>
            ))}
          </div>
        )}
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
                    alt={post.title}
                    width="30"
                    height="30"
                  />
                  <a href="" className="text-white mx-3">{post.title}</a>
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
