import Giscus from '@giscus/react';
import styles from '../styles/comments.module.css';
import { useToggleTheme } from '../hooks/useToggleTheme';

const Comments = () => {
  const { isLightMode } = useToggleTheme();
  return (
    <div className={styles.comments}>
      <Giscus
        repo="mustafamertgoksu/my-blog"
        repoId="R_kgDOHzAtew"
        category="General"
        categoryId="DIC_kwDOHzAte84CQuhn"
        mapping="pathname"
        reactionsEnabled="0"
        emitMetadata="0"
        theme="dark"
      />
    </div>
  );
};

export default Comments;
