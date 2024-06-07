import icon from '../../../assets/icons/Favourites.svg';
import styles from './FavourIcon.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '../../../UI';
import cn from 'classnames';
import { PATHS } from '../../../constants';

export const FavourIcon = () => {
  const { pathname } = useLocation();
  const isActiveClass = pathname.includes('favourites');

  return (
    <div
      className={cn(styles.icon, {
        [styles.icon_active]: isActiveClass,
      })}
    >
      <NavLink
        to={`${PATHS.FAVOURITES}`}
        style={{ width: '100%', boxSizing: 'border-box' }}
      >
        <Button type="icon" size={{ width: 100, height: 100 }} measure="%">
          <img src={icon} alt="burger-icon" className={styles.icon__img} />
        </Button>
      </NavLink>
    </div>
  );
};
