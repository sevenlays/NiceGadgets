import { Button } from '../../UI';
import styles from './ProductCard.module.scss';

import iconFavourite from '../../assets/icons/Favourites.svg';
import iconFavouriteActive from '../../assets/icons/Favourites Filled.svg';
import { useState } from 'react';
import { Product } from '../../types/Product';

type Props = {
  product?: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const [selected, setSelected] = useState({
    primary: false,
    favourite: false,
  });
  const onAddButtonClick = () => {
    setSelected(prev => ({ ...prev, primary: !prev.primary }));
  };

  const onFavouriteButtonClick = () => {
    setSelected(prev => ({ ...prev, favourite: !prev.favourite }));
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
          onClick={onAddButtonClick}
          type="primary"
          state={selected.primary ? 'selected' : 'disabled'}
          size={{
            height: 40,
          }}
        >
          {selected.primary ? 'Added' : 'Add to cart'}
        </Button>

        <Button
          state={selected.favourite ? 'selected' : 'disabled'}
          type="icon"
          size={{ height: 40 }}
          onClick={onFavouriteButtonClick}
        >
          <img
            src={selected.favourite ? iconFavouriteActive : iconFavourite}
            alt="icon"
          ></img>
        </Button>
      </div>
    </article>
  );
};
