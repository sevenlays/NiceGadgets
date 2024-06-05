import { Button } from '../../../UI';
import burger from '../../../assets/icons/Menu.svg';
import styles from './BurgerIcon.module.scss';

export const BurgerIcon = () => (
  <div className={styles.icon}>
    <Button type="icon" size={{ width: 100, height: 100 }} mesure="%">
      <img src={burger} alt="Icon" />
    </Button>
  </div>
);
