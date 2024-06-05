import icon from '../../../assets/icons/ArrowUp.svg';
import styles from './BackToTop.module.scss';

export const BackToTop = () => (
  <div className={styles.back}>
    <a href="#" className={styles.back__link}>
      Back to top
    </a>
    <a href="#" className={styles.back__icon}>
      <img src={icon} alt="return to the start of the page" />
    </a>
  </div>
);
