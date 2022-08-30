import { useToggleTheme } from "../hooks/useToggleTheme";
import { FC } from 'react';

type Props = {
  children: React.ReactNode;
}

const Title: FC<Props> = ({ children }) => {
  const {isLightMode} = useToggleTheme();
  return (
    <h2
      className={
        !isLightMode
          ? 'text-gray-50 opacity-50 text-center text-3xl my-4'
          : 'text-neutral-900 text-center text-3xl my-4'
      }
    >
      {children}
    </h2>
  );
}

export default Title;