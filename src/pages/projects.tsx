import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTitle } from '../hooks/useTitle';
import { useToggleTheme } from '../hooks/useToggleTheme';
import { githubRepositoriesURL } from '../datas';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import ContentLoader from 'react-content-loader';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from '@apollo/client';
import { ProjectCard } from '../styles/project.styles';

import { setContext } from '@apollo/client/link/context';

type Props = {
  pinnedItems: [];
};

const Projects: NextPage<Props> = ({ pinnedItems }) => {
  const { setTitle } = useTitle();
  const { isLightMode } = useToggleTheme();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchTopRepos = async () => {
    setLoading(false);
  };

  const getRepos = async () => {};

  useEffect(() => {
    setTitle('Projects');
    searchTopRepos();
  }, []);
  return (
    <main className="container">
      <section className="flex flex-col items-center my-5">
        <h2
          className={
            !isLightMode
              ? 'flex text-3xl text-neutral-300 opacity-70 text-center'
              : 'flex text-3xl text-black opacity-90 text-center'
          }
        >
          Top Projects
        </h2>
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
    </main>
  );
};

export async function getServerSideProps() {
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
    ssrMode: true,
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
      pinnedItems,
    },
  };
}

export default Projects;
