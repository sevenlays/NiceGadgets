import styles from './Logo.module.scss';
import logo from '../../assets/Logo.svg';

export const Logo = () => (
  <a href="#" className={styles.logo}>
    <img
      src={logo}
      alt="Nice gadgets store logo"
      className={styles.logo__img}
    />
  </a>
);
