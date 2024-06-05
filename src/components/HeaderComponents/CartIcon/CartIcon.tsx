import cart from '../../../assets/icons/Shopping bag.svg';
import styles from './CartIcon.module.scss';

export const CartIcon = () => (
  <a href="#" className={styles.icon}>
    <img src={cart} alt="burger-icon" className={styles.icon__img} />
  </a>
);
