import Giscus from '@giscus/react';
import { githubDiscussion } from '../datas';
import styles from '../styles/comments.module.css';
import { useToggleTheme } from '../hooks/useToggleTheme';

const Comments = () => {
  const { theme } = useToggleTheme();
  const isLightMode = theme === 'light';
  return (
    <div className={styles.comments}>
      <Giscus
        repo={githubDiscussion.repo}
        repoId={githubDiscussion.id}
        category={githubDiscussion.category}
        categoryId={githubDiscussion.categoryId}
        mapping={githubDiscussion.mapping}
        reactionsEnabled={githubDiscussion.reactionsEnabled}
        emitMetadata={githubDiscussion.emitMetadata}
        theme={githubDiscussion.theme}
      />
    </div>
  );
};

export default Comments;
