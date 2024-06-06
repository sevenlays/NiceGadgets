import cn from 'classnames';
import { Button } from '../../../UI';
import icon from '../../../assets/icons/Shopping bag.svg';
import styles from './CartIcon.module.scss';

export const CartIcon = () => (
  <div
    className={cn(styles.icon, {
      [styles.icon_active]: false,
    })}
  >
    <Button type="icon" size={{ width: 100, height: 100 }} measure="%">
      <img src={icon} alt="burger-icon" className={styles.icon__img} />
    </Button>
  </div>
);
