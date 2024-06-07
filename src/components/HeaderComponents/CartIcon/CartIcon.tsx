import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { Button } from '../../../UI';
import icon from '../../../assets/icons/Shopping bag.svg';
import styles from './CartIcon.module.scss';
import { PATHS } from '../../../constants';

export const CartIcon = () => (
  <div
    className={cn(styles.icon, {
      [styles.icon_active]: false,
    })}
  >
    <NavLink to={`${PATHS.CART}`}>
      <Button type="icon" size={{ width: 100, height: 100 }} measure="%">
        <img src={icon} alt="burger-icon" className={styles.icon__img} />
      </Button>
    </NavLink>
  </div>
);
