import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import { PATHS } from '../../../constants';

function getNavLinkClassName(isActive: boolean) {
  return cn(styles.nav__link, { [styles.nav__link_active]: isActive });
}

export const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <li>
        <NavLink
          to={PATHS.HOME}
          className={({ isActive }) => getNavLinkClassName(isActive)}
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${PATHS.PHONES.LIST}`}
          className={({ isActive }) => getNavLinkClassName(isActive)}
        >
          Phones
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${PATHS.TABLETS.LIST}`}
          className={({ isActive }) => getNavLinkClassName(isActive)}
        >
          tablets
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${PATHS.ACCESSORIES.LIST}`}
          className={({ isActive }) => getNavLinkClassName(isActive)}
        >
          accessories
        </NavLink>
      </li>
    </ul>
  </nav>
);
