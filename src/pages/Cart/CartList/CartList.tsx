import React from 'react';

import { CardItem } from '../../../components/CardItem/CardItem';

import { Product } from '../type/ProductType';
import style from './CartList.module.scss';

type Props = {
  prodsFromStore: Product[] | null;
  onDeleteClick: (productId: number) => void;
  calculateTotal: (action: 'increase' | 'decrease', price: number) => void;
};
export const CartList: React.FC<Props> = ({
  prodsFromStore,
  onDeleteClick,
  calculateTotal,
}) => {
  return (
    <section className={style.cartList}>
      {prodsFromStore?.map(product => (
        <React.Fragment key={product.id}>
          <CardItem
            product={product}
            onDeleteClick={onDeleteClick}
            calculateTotal={calculateTotal}
          />
        </React.Fragment>
      ))}
    </section>
  );
};
