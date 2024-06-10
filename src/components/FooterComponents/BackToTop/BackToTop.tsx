import { Button } from '../../../UI';
import icon from '../../../assets/icons/ArrowUp.svg';
import styles from './BackToTop.module.scss';

export const BackToTop = () => (
  <div className={styles.back}>
    <a href="#" className={styles.back__link}>
      Back to top
    </a>
    <Button type="icon" size={{ width: 32, height: 32 }}>
      <img src={icon} alt="Icon" />
    </Button>
  </div>
);
