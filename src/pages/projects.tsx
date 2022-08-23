import type { NextPage } from 'next';
import { useTitle } from '../hooks/useTitle';
import { useToggleTheme } from '../hooks/useToggleTheme';
import { githubRepositoriesURL } from '../datas';
import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { SiJavascript } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import axios from 'axios';
import ContentLoader from 'react-content-loader';
import { StyledProjects, ProjectCard } from '../styles/projects.styles';
import { ApiType } from '../types/githubAPIType';

type Props = {
  repos: ApiType[];
};

const Projects: NextPage<Props> = ({ repos }) => {
  const { setTitle } = useTitle();
  const { isLightMode } = useToggleTheme();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTitle('Projects');
    setLoading(false);
  }, []);
  return (
    <main className="container">
      <StyledProjects>
        <div className="projects-container">
          <h2
            className={
              !isLightMode
                ? 'flex items-center gap-2 text-gray-200 text-2xl font-semibold'
                : 'flex items-center gap-2 text-gray-900 text-2xl font-semibold'
            }
          >
            JavaScript <SiJavascript style={{ color: '#f0db4f' }} />
          </h2>
          <ul>
            {loading ? (
              <>
                <ContentLoader
                  speed={2}
                  width={400}
                  height={160}
                  viewBox="0 0 400 160"
                  backgroundColor="#000001"
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
                  backgroundColor="#000001"
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
                  backgroundColor="#000001"
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
              <>
                {repos.map((repo) => {
                  if (repo.language === 'JavaScript') {
                    return (
                      <ProjectCard key={repo.id}>
                        <>
                          <header>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={repo.html_url}
                            >
                              {repo.name}
                            </a>
                            <BsGithub className="icon" />
                          </header>
                          <p>{repo.description}</p>
                          <footer>
                            <span>{repo.stargazers_count}</span>
                            <AiFillStar />
                          </footer>
                        </>
                      </ProjectCard>
                    );
                  }
                  return '';
                })}
              </>
            )}
          </ul>
          <h2
            className={
              !isLightMode
                ? 'flex items-center gap-2 text-gray-200 text-2xl font-semibold'
                : 'flex items-center gap-2 text-gray-900 text-2xl font-semibold'
            }
          >
            TypeScript{' '}
            <svg
              id="typescript"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <rect width="36" height="36" x="6" y="6" fill="#1976d2" />
              <polygon
                fill="#fff"
                points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
              />
              <path
                fill="#fff"
                d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
              />
            </svg>{' '}
          </h2>
          <ul>
            {loading ? (
              <>
                <ContentLoader
                  speed={2}
                  width={400}
                  height={160}
                  viewBox="0 0 400 160"
                  backgroundColor="#000001"
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
                  backgroundColor="#000001"
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
                  backgroundColor="#000001"
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
              <>
                {repos.map((repo) => {
                  if (repo.language === 'TypeScript') {
                    return (
                      <ProjectCard key={repo.id}>
                        <>
                          <header>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={repo.html_url}
                            >
                              {repo.name}
                            </a>
                            <BsGithub className="icon" />
                          </header>
                          <p>{repo.description}</p>
                          <footer>
                            <span>{repo.stargazers_count}</span>
                            <AiFillStar />
                          </footer>
                        </>
                      </ProjectCard>
                    );
                  }
                  return '';
                })}
              </>
            )}
          </ul>
          <h2
            className={
              !isLightMode
                ? 'flex items-center gap-2 text-gray-200 text-2xl font-semibold'
                : 'flex items-center gap-2 text-gray-900 text-2xl font-semibold'
            }
          >
            Python <FaPython style={{ color: '#2a70aa' }} />{' '}
          </h2>
          <ul>
            {loading ? (
              <>
                <ContentLoader
                  speed={2}
                  width={400}
                  height={160}
                  viewBox="0 0 400 160"
                  backgroundColor="#000001"
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
                  backgroundColor="#000001"
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
                  backgroundColor="#000001"
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
              <>
                {repos.map((repo) => {
                  if (repo.language === 'Python') {
                    return (
                      <ProjectCard key={repo.id}>
                        <>
                          <header>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={repo.html_url}
                            >
                              {repo.name}
                            </a>
                            <BsGithub className="icon" />
                          </header>
                          <p>{repo.description}</p>
                          <footer>
                            <span>{repo.stargazers_count}</span>
                            <AiFillStar />
                          </footer>
                        </>
                      </ProjectCard>
                    );
                  }
                  return '';
                })}
              </>
            )}
          </ul>
        </div>
      </StyledProjects>
    </main>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(githubRepositoriesURL);
  const repos = await res.data;
  return {
    props: {
      repos,
    },
  };
}

export default Projects;
