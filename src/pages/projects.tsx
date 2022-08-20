import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useTitle } from '../hooks/useTitle';
import { useToggleTheme } from '../hooks/useToggleTheme';
import { githubRepositoriesURL } from '../datas';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

const Projects: NextPage = () => {
  const { setTitle } = useTitle();
  const { isLightMode } = useToggleTheme();
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
    </main>
  );
};

export default Projects;
