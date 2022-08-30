import { useToggleTheme } from '../hooks/useToggleTheme';
import { FC } from 'react';
import styles from '../styles/title.module.css';

type Props = {
  children: React.ReactNode;
};

const Title: FC<Props> = ({ children }) => {
  const { isLightMode } = useToggleTheme();
  return (
    <h2 className={!isLightMode ? styles.title : styles.lightTitle}>
      {children}
    </h2>
  );
};

export default Title;
