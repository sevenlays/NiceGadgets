// import { BurgerIcon } from '../BurgerIcon/BurgerIcon';
import { CartIcon } from '../CartIcon/CartIcon';
import { FavourIcon } from '../FavourIcon/FavourIcon';
import { Logo } from '../../Logo/Logo';
import { Nav } from '../Nav/Nav';
import styles from './Header.module.scss';
import { BurgerIcon } from '../BurgerIcon/BurgerIcon';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useState } from 'react';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.header}>
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />

      <Logo />

      <div className={styles.nav__desctop}>
        <Nav />
      </div>

      <BurgerIcon setShowMenu={setShowMenu} />
      <FavourIcon />
      <CartIcon />
    </header>
  );
};
