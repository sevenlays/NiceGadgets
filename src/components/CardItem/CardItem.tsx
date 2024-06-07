import { Button } from '../../UI';
import style from './CardItem.module.scss';
import minus from '../../assets/icons/Minus.svg';
import plus from '../../assets/icons/Plus.svg';
import closeIcon from '../../assets/icons/Close.svg';
import { Product } from '../../pages/Cart/type/ProductType';
import { useState } from 'react';

type Props = {
  product: Product;
  onDeleteClick: (prdouctId: number) => void;
};

export const CardItem: React.FC<Props> = ({ product, onDeleteClick }) => {
  const [productAmount, setProductAmount] = useState<number>(1);
  const increaseProductAmount = () => {
    setProductAmount(prev => {
      const newAmount = prev + 1;

      return newAmount;
    });
  };

  const decreaseProductAmount = () => {
    if (productAmount > 1) {
      setProductAmount(prev => {
        const newAmount = prev - 1;

        return newAmount;
      });
    }
  };

  return (
    <article className={style.cardItem}>
      <div className={style.cardItem__product}>
        <div
          className={style.cardItem__delete}
          onClick={() => onDeleteClick(product.id)}
        >
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
          <div className={style.cardItem__amount}>{productAmount}</div>
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
