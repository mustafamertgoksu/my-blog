import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTitle } from '../hooks/useTitle';
import styles from '../styles/projects.module.css';
import { useToggleTheme } from '../hooks/useToggleTheme';
import { githubRepositoriesURL } from '../datas';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

const Projects: NextPage = () => {
  const { setTitle } = useTitle();
  const { theme } = useToggleTheme();
  const isLightMode = theme === 'light';
  const [repos, setRepos] = useState([]);

  const getRepos = async () => {
   
    
  };

  useEffect(() => {
    setTitle('Projects');
    getRepos();
  }, []);
  return (
    <main className="container">
      <h2
        className={
          !isLightMode
            ? 'flex text-3xl text-neutral-300 opacity-70 text-center'
            : 'flex text-3xl text-black opacity-90 text-center'
        }
      >
        Projects
      </h2>
      {repos.map((repo: any) => (
        <a
          href={repo.html_url}
          key={repo.name}
          target="blank"
          rel="noreferrer"
          className={isLightMode ? styles.lightProject : styles.project}
        >
          <div
            className={
              !isLightMode ? styles.eachProject : styles.lightEachProject
            }
          >
            <header className="flex justify-between px-4">
              <span className={styles.projectTitle}>{repo.name}</span>
              <BsGithub className="text-2xl text-white" />
            </header>
            <main className={'px-6 py-4 text-blue-500'}>
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
    </main>
  );
};

export default Projects;
