// import icon from '../../assets/icons/Menu.svg';
import styles from './HeaderIcon.module.scss';

type Props = {
  icon: string;
  altText: string;
};

export const HeaderIcon: React.FC<Props> = ({ icon, altText }) => (
  <a href="#" className={styles.icon}>
    <img src={icon} alt={altText} className={styles.icon__img} />
  </a>
);
