import icon from '../../../assets/icons/Favourites.svg';
import iconActive from '../../../assets/icons/Favourites Filled.svg';
import styles from './FavourIcon.module.scss';
import { Button } from '../../../UI';

export const FavourIcon = () =>
  true ? (
    <div className={styles.icon}>
      <Button type="icon" size={{ width: 100, height: 100 }} measure="%">
        <img src={iconActive} alt="burger-icon" className={styles.icon__img} />
      </Button>
    </div>
  ) : (
    <div className={styles.icon}>
      <Button type="icon" size={{ width: 100, height: 100 }} measure="%">
        <img src={icon} alt="burger-icon" className={styles.icon__img} />
      </Button>
    </div>
  );
