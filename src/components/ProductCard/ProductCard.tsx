import { Button } from '../../UI';
import styles from './ProductCard.module.scss';

import iconFavourite from '../../assets/icons/Favourites.svg';
import iconFavouriteActive from '../../assets/icons/Favourites Filled.svg';
// import { useState } from 'react';
import { Product } from '../../types/Product';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  addToCart,
  addToFavorites,
  removeFromCart,
  removeFromFavorites,
} from '../../feature/cart/productSlice';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const cart = useSelector((state: RootState) => state.productStorage.cart);
  const favorites = useSelector(
    (state: RootState) => state.productStorage.favorites,
  );

  const dispatch = useDispatch();

  const isInCart = cart.includes(product?.itemId);

  const isInFavorites = favorites.includes(product?.itemId);

  window.console.log(cart);

  const handleToggleToCart = () => {
    if (isInCart) {
      dispatch(removeFromCart(product.itemId));
    } else {
      dispatch(addToCart(product.itemId));
    }
  };

  const handleToggleToFavorites = () => {
    if (isInFavorites) {
      dispatch(removeFromFavorites(product.itemId));
    } else {
      dispatch(addToFavorites(product.itemId));
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.card__imageBlock}>
        <img className={styles.card__imageBlock__image} src={product?.image} />
      </div>
      <div className={styles.card__top}>
        <h1 className={styles.card__top__title}>{product?.name}</h1>
        <div>
          <p className={styles.card__top__price}>
            <span
              className={styles.card__top__price__actual}
            >{`$${product?.price}`}</span>
            <div
              className={styles.card__top__price__withoutDiscount}
            >{`$${product?.fullPrice}`}</div>
          </p>
        </div>
      </div>

      <section className={styles.phoneParams}>
        <div className={styles.phoneParams__param}>
          <p className={styles.phoneParams__param__name}>Screen</p>
          <p className={styles.phoneParams__param__overview}>
            {product?.screen}
          </p>
        </div>
        <div className={styles.phoneParams__param}>
          <p className={styles.phoneParams__param__name}>Capacity</p>
          <p className={styles.phoneParams__param__overview}>
            {product?.capacity}
          </p>
        </div>
        <div className={styles.phoneParams__param}>
          <p className={styles.phoneParams__param__name}>RAM</p>
          <p className={styles.phoneParams__param__overview}>{product?.ram}</p>
        </div>
      </section>
      <div className={styles.buttonsPlaceholder}>
        <Button
          onClick={handleToggleToCart}
          type="primary"
          state={isInCart ? 'selected' : 'disabled'}
          size={{
            height: 40,
          }}
        >
          {isInCart ? 'Added' : 'Add to cart'}
        </Button>

        <Button
          state={isInFavorites ? 'selected' : 'disabled'}
          type="icon"
          size={{ height: 40 }}
          onClick={handleToggleToFavorites}
        >
          <img
            src={isInFavorites ? iconFavouriteActive : iconFavourite}
            alt="icon"
          ></img>
        </Button>
      </div>
    </article>
  );
};
