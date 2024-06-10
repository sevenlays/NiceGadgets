import { Button } from '../../../UI';
import { Product } from '../type/ProductType';
import style from './CartTotal.module.scss';

type Props = {
  favouriteProducts: Product[];
  total: number;
};

export const CartTotal: React.FC<Props> = ({ favouriteProducts, total }) => {
  const amount = favouriteProducts.length;

  return (
    <section className={style.cartTotal}>
      <h2 className={style.cartTotal__total}>{`$${total}`}</h2>
      <p className={style.cartTotal__amount}>{`Total for ${amount} items`}</p>
      <Button type="primary" size={{ width: 320, height: 48 }}>
        Checkout
      </Button>
    </section>
  );
};
