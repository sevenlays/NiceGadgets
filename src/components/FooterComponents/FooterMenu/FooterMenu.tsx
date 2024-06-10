import styles from './FooterMenu.module.scss';

export const FooterMenu = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <li className="nav__item">
        <a href="#" className={styles.nav__link}>
          Github
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className={styles.nav__link}>
          Contacts
        </a>
      </li>
      <li className="nav__item">
        <a href="#" className={styles.nav__link}>
          rights
        </a>
      </li>
    </ul>
  </nav>
);
