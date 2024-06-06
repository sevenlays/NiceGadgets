import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import { PATHS } from '../../../constants';

export const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <li>
        <NavLink
          to={PATHS.HOME}
          className={({ isActive }) =>
            cn(styles.nav__link, { [styles.nav__link_active]: isActive })
          }
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${PATHS.PHONES.LIST}`}
          className={({ isActive }) =>
            cn(styles.nav__link, { [styles.nav__link_active]: isActive })
          }
        >
          Phones
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${PATHS.TABLETS.LIST}`}
          className={({ isActive }) =>
            cn(styles.nav__link, { [styles.nav__link_active]: isActive })
          }
        >
          tablets
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${PATHS.ACCESSORIES.LIST}`}
          className={({ isActive }) =>
            cn(styles.nav__link, { [styles.nav__link_active]: isActive })
          }
        >
          accessories
        </NavLink>
      </li>
    </ul>
  </nav>
);
