import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';
import { PATHS } from '../../../constants';

type Props = {
  handleCloseMenu: () => void;
};

function getNavLinkClassName(isActive: boolean) {
  return cn(styles.nav__link, { [styles.nav__link_active]: isActive });
}

export const Nav: React.FunctionComponent<Props> = ({ handleCloseMenu }) => (
  <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <li>
        <NavLink
          to={PATHS.HOME}
          className={({ isActive }) => getNavLinkClassName(isActive)}
          onClick={handleCloseMenu}
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${PATHS.PHONES.LIST}`}
          className={({ isActive }) => getNavLinkClassName(isActive)}
          onClick={handleCloseMenu}
        >
          Phones
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${PATHS.TABLETS.LIST}`}
          className={({ isActive }) => getNavLinkClassName(isActive)}
          onClick={handleCloseMenu}
        >
          tablets
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${PATHS.ACCESSORIES.LIST}`}
          className={({ isActive }) => getNavLinkClassName(isActive)}
          onClick={handleCloseMenu}
        >
          accessories
        </NavLink>
      </li>
    </ul>
  </nav>
);
