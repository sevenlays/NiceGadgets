import burger from '../../../assets/icons/Menu.svg';
import styles from './BurgerIcon.module.scss';

export const BurgerIcon = () => (
  <a href="#" className={styles.icon}>
    <img src={burger} alt="burger-icon" className={styles.icon__img} />
  </a>
);
