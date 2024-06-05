// import { BurgerIcon } from '../BurgerIcon/BurgerIcon';
import { CartIcon } from '../CartIcon/CartIcon';
import { FavourIcon } from '../FavourIcon/FavourIcon';
import { Logo } from '../../Logo/Logo';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import { BurgerIcon } from '../BurgerIcon/BurgerIcon';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />

      <Nav />

      <BurgerIcon />
      <FavourIcon />
      <CartIcon />
    </header>
  );
};
