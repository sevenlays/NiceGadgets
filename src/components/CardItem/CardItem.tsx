import { Button } from '../../UI';
import style from './CardItem.module.scss';
import minus from '../../assets/icons/Minus.svg';
import plus from '../../assets/icons/Plus.svg';
import closeIcon from '../../assets/icons/Close.svg';
import { Product } from '../../pages/Cart/type/ProductType';
import { decreaseQuantity, increaseQuantity, selectCart } from '../../redux';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';

type Props = {
  product: Product;
  onIncrease: (product: Product) => void;
  onDecrease: (product: Product) => void;
  handleRemoveAllInstances: (product: Product) => void;
};

export const CardItem: React.FC<Props> = ({
  product,
  onIncrease,
  onDecrease,
  handleRemoveAllInstances,
}) => {
  const dispatch = useAppDispatch();

  const cart = useSelector(selectCart);

  const currentProduct = cart.find(
    itemInCart => itemInCart.cartItemId === product.itemId,
  );

  const increaseProductAmount = () => {
    dispatch(increaseQuantity(product.itemId));
    onIncrease(product);
  };

  const decreaseProductAmount = () => {
    dispatch(decreaseQuantity(product.itemId));
    onDecrease(product);
  };

  const handleDeleteFromCart = () => {
    handleRemoveAllInstances(product);
  };

  return (
    <article className={style.cardItem}>
      <div className={style.cardItem__product}>
        <div className={style.cardItem__delete} onClick={handleDeleteFromCart}>
          <img src={closeIcon} alt="icon" />
        </div>
        <img className={style.cardItem__image} src={product.image} />
        <h2 className={style.cardItem__title}>{product.name}</h2>
      </div>
      <section className={style.cardItem__info}>
        <div className={style.cardItem__pickAmount}>
          <Button
            type="number"
            size={{ height: 32 }}
            onClick={decreaseProductAmount}
          >
            <img src={minus} alt="icon" />
          </Button>
          <div className={style.cardItem__amount}>
            {currentProduct?.quantity}
          </div>
          <Button
            type="number"
            size={{ height: 32 }}
            onClick={increaseProductAmount}
          >
            <img src={plus} alt="icon" />
          </Button>
        </div>
        <span className={style.cardItem__price}>{`$${product.price}`}</span>
      </section>
    </article>
  );
};
