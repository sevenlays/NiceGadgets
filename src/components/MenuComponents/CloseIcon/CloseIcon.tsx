import icon from '../../../assets/icons/Close.svg';
import styles from './CloseIcon.module.scss';

export const CloseIcon = () => (
  <a href="#" className={styles.icon}>
    <img src={icon} alt="burger-icon" className={styles.icon__img} />
  </a>
);
