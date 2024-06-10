import { Button } from '../../UI';
import styles from './ProductCard.module.scss';
import { ProductParams } from './ProductParams/ProductParams';
import iconFavourite from '../../assets/icons/Favourites.svg';
import iconFavouriteActive from '../../assets/icons/Favourites Filled.svg';
import { useState } from 'react';
import { Product } from '../../types/Product';
import { FullPrice } from './PriceWithoutDiscount/FullPrice';
import { SingleParam } from './ProductParams/SingleParam/SingleParam';

/* product object should be props now its just a placeholder ti prevent errors*/

type Props = {
  product: Product;
  IsDiscount?: boolean;
};

export const ProductCard: React.FC<Props> = ({
  product,
  IsDiscount = true,
}) => {
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
      <div className={styles.card__image_container}>
        <img className={styles.card__image} src={product.image} />
      </div>
      <h5 className={styles.card__title}>{product.name}</h5>
      <div>
        <p className={styles.card__price}>
          <span
            className={styles.card__price__actual}
          >{`$${product.price}`}</span>
          {IsDiscount && <FullPrice fullPrice={product.fullPrice} />}
        </p>
      </div>

      <ProductParams>
        <SingleParam name="Screen" param={product.screen} />
        <SingleParam name="Capacity" param={product.capacity} />
        <SingleParam name="RAM" param={product.ram} />
      </ProductParams>
      <div className={styles.buttonsPlaceholder}>
        <Button
          onClick={onAddButtonClick}
          type="primary"
          state={selected.primary ? 'selected' : 'disabled'}
          size={{
            width: 160,
            height: 40,
          }}
        >
          {selected.primary ? 'Added' : 'Add to cart'}
        </Button>
        <Button
          state={selected.favourite ? 'selected' : 'disabled'}
          type="icon"
          size={{ width: 40, height: 40 }}
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
