import styles from './FooterLogo.module.scss';
import logo from '../../../assets/Logo.svg';

export const FooterLogo = () => (
  <a href="#" className={styles.logo}>
    <img
      src={logo}
      alt="Nice gadgets store logo"
      className={styles.logo__img}
    />
  </a>
);
