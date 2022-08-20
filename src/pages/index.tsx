import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTitle } from '../hooks/useTitle';
import styles from '../styles/home.module.css';
import { useToggleTheme } from '../hooks/useToggleTheme';
import { datas } from '../datas';
import { AiFillStar } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import ContentLoader from 'react-content-loader';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import TypewriterComponent from 'typewriter-effect';
import Techs from '../components/techs';
import { getAllPosts } from '../lib/posts';
import Link from 'next/link';
import aboutStyles from '../styles/about.module.css';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import {ProjectCard} from '../styles/project.styles';

type Props = {
  posts: any;
  pinnedItems: any;
};

const Home: NextPage<Props> = ({ posts, pinnedItems }) => {
  const { setTitle } = useTitle();
  const { isLightMode } = useToggleTheme();
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const searchTopRepos = async () => {
    setLoading(false);
  };
  useEffect(() => {
    setTitle('Home');
    searchTopRepos();
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
            {pinnedItems.map((repo: any) => (
              <ProjectCard key={repo.id}>
                <>
                  <header>
                    <a target="_blank" rel="noreferrer" href={repo.url}>
                      {repo.name}
                    </a>
                    <BsGithub className="icon" />
                  </header>
                  <p>{repo.description}</p>
                  <footer>
                    <span>{repo.stargazerCount}</span>
                    <AiFillStar />
                  </footer>
                </>
              </ProjectCard>
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
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,

        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),

    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "mustafamertgoksu") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  url
                  stargazerCount
                  description
                  owner {
                    avatarUrl
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }: any) => node);

  return {
    props: {
      posts,
      pinnedItems,
    },
  };
}

export default Home;
