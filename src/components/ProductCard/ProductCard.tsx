import { Button } from '../../UI';
import styles from './ProductCard.module.scss';
import { ProductParams } from './ProductParams/ProductParams';
import { ReactComponent as Favourite } from '../../assets/icons/Favourites.svg';
/* eslint-disable-next-line max-len */
import { ReactComponent as FavouriteActive } from '../../assets/icons/Favourites Filled.svg';

import { Product } from '../../types/Product';
import { FullPrice } from './PriceWithoutDiscount/FullPrice';
import { SingleParam } from './ProductParams/SingleParam/SingleParam';

/* product object should be props now its just a placeholder ti prevent errors*/
import { useSelector } from 'react-redux';
import {
  addToCart,
  addToFavorites,
  removeFromCart,
  removeFromFavorites,
  selectCart,
  selectfavorites,
} from '../../redux/app/appSlice';

import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
  IsDiscount?: boolean;
};

export const ProductCard: React.FC<Props> = ({
  product,
  IsDiscount = true,
}) => {
  const cart = useSelector(selectCart);
  const favorites = useSelector(selectfavorites);

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const isInCart = cart.includes(product?.itemId);

  const isInFavorites = favorites.includes(product?.itemId);

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
      <div className={styles.card__image_container}>
        <img className={styles.card__image} src={product?.image} />
      </div>
      <Link to="#">
        <h5 className={styles.card__title}>{product?.name}</h5>
      </Link>

      <div>
        <p className={styles.card__price}>
          <span
            className={styles.card__price__actual}
          >{`$${product?.price}`}</span>
          {IsDiscount && <FullPrice fullPrice={product?.fullPrice} />}
        </p>
      </div>

      <ProductParams>
        <SingleParam name={t('productCard.screen')} param={product?.screen} />
        <SingleParam
          name={t('productCard.capacity')}
          param={product?.capacity}
        />
        <SingleParam name={t('productCard.RAM')} param={product?.ram} />
      </ProductParams>
      <div className={styles.buttonsPlaceholder}>
        <Button
          onClick={handleToggleToCart}
          type="primary"
          state={isInCart ? 'selected' : 'disabled'}
          size={{
            width: 160,
            height: 40,
          }}
        >
          {isInCart ? t('productCard.added') : t('productCard.addToCart')}
        </Button>
        <Button
          state={isInFavorites ? 'selected' : 'disabled'}
          type="icon"
          size={{ width: 50, height: 40 }}
          onClick={handleToggleToFavorites}
        >
          {isInFavorites ? (
            <FavouriteActive />
          ) : (
            <Favourite className={styles.card__favourite_icon} />
          )}
        </Button>
      </div>
    </article>
  );
};
