export const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="" alt="Nice gadgets store logo" className="logo__img" />
      </a>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Phones
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              tablets
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              accessories
            </a>
          </li>
        </ul>
      </nav>

      <a href="#" className="burger">
        <img src="" alt="burger-icon" className="burger__img" />
      </a>
      <a href="#" className="favourites">
        <img src="" alt="favourites-icon" className="favourites__img" />
      </a>
      <a href="#" className="cart">
        <img src="" alt="cart-icon" className="cart__img" />
      </a>
    </header>
  );
};
