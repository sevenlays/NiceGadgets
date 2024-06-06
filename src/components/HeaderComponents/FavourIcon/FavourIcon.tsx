import icon from '../../../assets/icons/Favourites.svg';
import styles from './FavourIcon.module.scss';
import { Button } from '../../../UI';
import cn from 'classnames';

export const FavourIcon = () => (
  <div
    className={cn(styles.icon, {
      [styles.icon_active]: true,
    })}
  >
    <Button type="icon" size={{ width: 100, height: 100 }} mesure="%">
      <img src={icon} alt="burger-icon" className={styles.icon__img} />
    </Button>
  </div>
);
