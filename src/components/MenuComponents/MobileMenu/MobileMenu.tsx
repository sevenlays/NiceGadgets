import { CartIcon } from '../../HeaderComponents/CartIcon/CartIcon';
import { FavourIcon } from '../../HeaderComponents/FavourIcon/FavourIcon';
import { Logo } from '../../Logo/Logo';
import { CloseIcon } from '../CloseIcon/CloseIcon';
import styles from './MobileMenu.module.scss';

export const MobileMenu = () => (
  <aside className={styles.aside}>
    <div className={styles.header}>
      <Logo />
      <CloseIcon />
    </div>

    <div className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className="nav__item">
          <a href="#" className={styles.nav__link}>
            home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className={styles.nav__link}>
            Phones
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className={styles.nav__link}>
            tablets
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className={styles.nav__link}>
            accessories
          </a>
        </li>
      </ul>
    </div>

    <div className={styles.footer}>
      <FavourIcon />
      <CartIcon />
    </div>
  </aside>
);
