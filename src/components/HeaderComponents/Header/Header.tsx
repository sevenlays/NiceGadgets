// import { BurgerIcon } from '../BurgerIcon/BurgerIcon';
import { CartIcon } from '../CartIcon/CartIcon';
import { FavourIcon } from '../FavourIcon/FavourIcon';
import { Logo } from '../../Logo/Logo';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import { BurgerIcon } from '../BurgerIcon/BurgerIcon';
import { MobileMenu } from '../../MenuComponents/MobileMenu/MobileMenu';
import { useState } from 'react';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.header}>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />

      <Logo />

      <Nav />

      <BurgerIcon setShowMenu={setShowMenu} />
      <FavourIcon />
      <CartIcon />
    </header>
  );
};
