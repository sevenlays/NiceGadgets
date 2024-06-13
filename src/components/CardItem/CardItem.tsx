import { Button } from '../../UI';
import style from './CardItem.module.scss';
import { ReactComponent as Minus } from '../../assets/icons/Minus.svg';
import { ReactComponent as Plus } from '../../assets/icons/Plus.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/Close.svg';
import { Product } from '../../pages/Cart/type/ProductType';
import { useState } from 'react';

type Props = {
  product: Product;
  onDeleteClick: (prdouctId: number) => void;
  calculateTotal: (action: 'increase' | 'decrease', price: number) => void;
};

export const CardItem: React.FC<Props> = ({
  product,
  onDeleteClick,
  calculateTotal,
}) => {
  const [productAmount, setProductAmount] = useState<number>(1);
  const increaseProductAmount = () => {
    setProductAmount(prev => {
      const newAmount = prev + 1;

      return newAmount;
    });
    calculateTotal('increase', product.price);
  };

  const decreaseProductAmount = () => {
    if (productAmount > 1) {
      setProductAmount(prev => {
        const newAmount = prev - 1;

        return newAmount;
      });
      calculateTotal('decrease', product.price);
    }
  };

  return (
    <article className={style.cardItem}>
      <div className={style.cardItem__product}>
        <div
          className={style.cardItem__delete}
          onClick={() => onDeleteClick(product.id)}
        >
          <CloseIcon className={style.cardItem__icon} />
        </div>
        <img className={style.cardItem__image} src={product.image} />
        <h2 className={style.cardItem__title}>{product.name}</h2>
      </div>
      <section className={style.cardItem__info}>
        <div className={style.cardItem__pickAmount}>
          <div className={style.cardItem__container}>
            <Button
              type="sign"
              size={{ height: 32 }}
              onClick={decreaseProductAmount}
            >
              <Minus className={style.cardItem__container__icon} />
            </Button>
          </div>

          <div className={style.cardItem__amount}>{productAmount}</div>
          <div className={style.cardItem__container}>
            <Button
              type="sign"
              size={{ height: 32 }}
              onClick={increaseProductAmount}
            >
              <Plus className={style.cardItem__container__icon} />
            </Button>
          </div>
        </div>
        <span className={style.cardItem__price}>{`$${product.price}`}</span>
      </section>
    </article>
  );
};
