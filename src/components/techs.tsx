import { TechsIcons } from '../datas';
import Image from 'next/image';
import { useToggleTheme } from '../hooks/useToggleTheme';
import styles from '../styles/techs.module.css';

const Techs = () => {
  const { isLightMode } = useToggleTheme();
  return (
    <div className={styles.techsContainer}>
      {TechsIcons.map((tech, index) => {
        if (tech.dark === true) {
          return (
            <div
              key={index}
              className={!isLightMode ? styles.techCard : styles.lightTechCard}
            >
              <Image
                src={
                  isLightMode
                    ? '/images/nextdotjs.svg'
                    : '/images/nextdotjslight.svg'
                }
                alt={tech.name}
                width="30"
                height="30"
              />
              <span
                className={
                  !isLightMode ? styles.techName : styles.lightTechName
                }
              >
                {tech.name}
              </span>
            </div>
          );
        }
        return (
          <div
            className={!isLightMode ? styles.techCard : styles.lightTechCard}
            key={index}
          >
            <Image
              src={tech.image}
              width="30"
              height="30"
              alt={tech.name}
            />
            <span
              className={!isLightMode ? styles.techName : styles.lightTechName}
            >
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Techs;
