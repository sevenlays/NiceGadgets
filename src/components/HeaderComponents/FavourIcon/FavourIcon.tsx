import icon from '../../../assets/icons/Favourites.svg';
import iconActive from '../../../assets/icons/Favourites Filled.svg';
import styles from './FavourIcon.module.scss';

export const FavourIcon = () =>
  false ? (
    <a href="#" className={styles.icon}>
      <img src={iconActive} alt="burger-icon" className={styles.icon__img} />
    </a>
  ) : (
    <a href="#" className={styles.icon}>
      <img src={icon} alt="burger-icon" className={styles.icon__img} />
    </a>
  );
