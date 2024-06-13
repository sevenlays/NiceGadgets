import { Button } from '../../../UI';
import { Product } from '../type/ProductType';
import style from './CartTotal.module.scss';
import { useTranslation } from 'react-i18next';

type Props = {
  favouriteProducts: Product[];
  total: number;
};

export const CartTotal: React.FC<Props> = ({ favouriteProducts, total }) => {
  const amount = favouriteProducts.length;

  const { t } = useTranslation();

  return (
    <section className={style.cartTotal}>
      <h2 className={style.cartTotal__total}>{`$${total}`}</h2>
      <p
        className={style.cartTotal__amount}
      >{`${t('cart.totalFor')} ${amount} ${t('cart.items')}`}</p>
      <Button type="primary" size={{ width: 320, height: 48 }}>
        {t('cart.checkout')}
      </Button>
    </section>
  );
};
