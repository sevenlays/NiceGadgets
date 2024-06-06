import { Button } from '../../../UI';
import { Product } from '../type/ProductType';
import style from './CartTotal.module.scss';

type Props = {
  favouriteProducts: Product[];
};

export const CartTotal: React.FC<Props> = ({ favouriteProducts }) => {
  const amount = favouriteProducts.length;

  const price = favouriteProducts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  return (
    <section className={style.cartTotal}>
      <h2 className={style.cartTotal__total}>{`$${price}`}</h2>
      <p className={style.cartTotal__amount}>{`Total for ${amount} items`}</p>
      <Button type="primary" size={{ width: 320, height: 48 }}>
        Checkout
      </Button>
    </section>
  );
};
