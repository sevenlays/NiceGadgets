import { BackToTop } from '../BackToTop/BackToTop';
import { FooterLogo } from '../FooterLogo/FooterLogo';
import { FooterMenu } from '../FooterMenu/FooterMenu';
import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.footer__wrapper}>
        <FooterLogo />

        <FooterMenu />

        <BackToTop />
      </div>
    </div>
  </footer>
);
