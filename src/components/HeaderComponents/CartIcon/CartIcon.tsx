import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '../../../UI';
import { ReactComponent as Icon } from '../../../assets/icons/Shopping bag.svg';
import styles from './CartIcon.module.scss';
import { PATHS } from '../../../constants';

export const CartIcon = () => {
  const { pathname } = useLocation();
  const isActiveClass = pathname.includes('cart');

  return (
    <div
      className={cn(styles.icon, {
        [styles.icon_active]: isActiveClass,
      })}
    >
      <NavLink
        to={`${PATHS.CART}`}
        style={{ width: '100%', boxSizing: 'border-box' }}
      >
        <Button
          type="icon"
          size={{ width: 100, height: 100 }}
          measure="%"
          state="header"
        >
          <Icon className={styles.icon__fill} />
        </Button>
      </NavLink>
    </div>
  );
};
