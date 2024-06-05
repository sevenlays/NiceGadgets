import { Button } from '../../../UI';
import icon from '../../../assets/icons/Close.svg';
import styles from './CloseIcon.module.scss';

export const CloseIcon = () => (
  <div className={styles.icon}>
    <Button type="icon" size={{ width: 100, height: 100 }} mesure="%">
      <img src={icon} alt="Icon" />
    </Button>
  </div>
);
