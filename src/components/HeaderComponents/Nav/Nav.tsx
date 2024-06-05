import cn from 'classnames';
import styles from './Nav.module.scss';

export const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <li>
        <a
          href="#"
          className={cn(styles.nav__link, { [styles.nav__link_active]: true })}
        >
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
  </nav>
);
