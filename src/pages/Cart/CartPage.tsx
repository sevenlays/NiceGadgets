import style from './CartPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../UI';
import { Product } from './type/ProductType';
import { CartList } from './CartList/CartList';
import { CartTotal } from './CartTotal/CartTotal';
import { useState } from 'react';

const productsExample = [
  {
    id: 190,
    category: 'tablets',
    itemId: 'apple-ipad-mini-5th-gen-64gb-gold',
    name: 'Apple iPad Mini (5th Gen) 64GB Gold',
    capacity: '64GB',
    fullPrice: 549,
    price: 499,
    color: 'gold',
    image: 'img/tablets/apple-ipad-mini-5th-gen/gold/00.webp',
    screen: "7.9' Retina",
    ram: '3GB',
    year: 2019,
  },
  {
    id: 191,
    category: 'phones',
    itemId: 'apple-iphone-14-pro-128gb-gold',
    name: 'Apple iPhone 14 Pro 128GB Gold',
    fullPrice: 1156,
    price: 1068,
    screen: "6.1' OLED",
    capacity: '128GB',
    color: 'gold',
    ram: '6GB',
    year: 2022,
    image: 'img/phones/apple-iphone-14-pro/gold/00.webp',
  },
  {
    id: 194,
    category: 'phones',
    itemId: 'apple-iphone-14-pro-256gb-gold',
    name: 'Apple iPhone 14 Pro 256GB Gold',
    fullPrice: 1300,
    price: 1220,
    screen: "6.1' OLED",
    capacity: '256GB',
    color: 'gold',
    ram: '6GB',
    year: 2022,
    image: 'img/phones/apple-iphone-14-pro/gold/00.webp',
  },
  {
    id: 195,
    category: 'phones',
    itemId: 'apple-iphone-14-pro-256gb-gold',
    name: 'Apple iPhone 14 Pro 256GB Gold',
    fullPrice: 1300,
    price: 1220,
    screen: "6.1' OLED",
    capacity: '256GB',
    color: 'gold',
    ram: '6GB',
    year: 2022,
    image: 'img/phones/apple-iphone-14-pro/gold/00.webp',
  },
  {
    id: 196,
    category: 'phones',
    itemId: 'apple-iphone-14-pro-256gb-gold',
    name: 'Apple iPhone 14 Pro 256GB Gold',
    fullPrice: 1300,
    price: 1220,
    screen: "6.1' OLED",
    capacity: '256GB',
    color: 'gold',
    ram: '6GB',
    year: 2022,
    image: 'img/phones/apple-iphone-14-pro/gold/00.webp',
  },
  {
    id: 197,
    category: 'phones',
    itemId: 'apple-iphone-14-pro-256gb-gold',
    name: 'Apple iPhone 14 Pro 256GB Gold',
    fullPrice: 1300,
    price: 1220,
    screen: "6.1' OLED",
    capacity: '256GB',
    color: 'gold',
    ram: '6GB',
    year: 2022,
    image: 'img/phones/apple-iphone-14-pro/gold/00.webp',
  },
  {
    id: 198,
    category: 'phones',
    itemId: 'apple-iphone-14-pro-256gb-gold',
    name: 'Apple iPhone 14 Pro 256GB Gold',
    fullPrice: 1300,
    price: 1220,
    screen: "6.1' OLED",
    capacity: '256GB',
    color: 'gold',
    ram: '6GB',
    year: 2022,
    image: 'img/phones/apple-iphone-14-pro/gold/00.webp',
  },
  {
    id: 199,
    category: 'phones',
    itemId: 'apple-iphone-14-pro-256gb-gold',
    name: 'Apple iPhone 14 Pro 256GB Gold',
    fullPrice: 1300,
    price: 1220,
    screen: "6.1' OLED",
    capacity: '256GB',
    color: 'gold',
    ram: '6GB',
    year: 2022,
    image: 'img/phones/apple-iphone-14-pro/gold/00.webp',
  },
];

export const CartPage = () => {
  /* Скоріш за все FavouriyeProdict буде приходити з Редакс стейту. Так як продукти додаються з іншого компонента, але покищо роблю через UseState локально для цього компонета */
  const [favouriteProducts, setfavouriteProducts] =
    useState<Product[]>(productsExample);

  const initialTotal = favouriteProducts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  const [total, setTotal] = useState(initialTotal);
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(-1);
  };

  const calculateTotal = (action: 'increase' | 'decrease', price: number) => {
    if (action === 'increase') {
      setTotal(prev => prev + price);
    }

    if (action === 'decrease') {
      setTotal(prev => prev - price);
    }
  };

  const onDeleteClick = (productId: number) => {
    const decreasePrice = favouriteProducts.find(
      product => product.id === productId,
    );

    setfavouriteProducts(prev =>
      prev.filter(product => product.id !== productId),
    );
    if (decreasePrice) {
      calculateTotal('decrease', decreasePrice?.price);
    }
  };

  return (
    <div className="page__container">
      <section className={style.cart}>
        <Button
          type="back"
          size={{ width: 66, height: 16 }}
          onClick={onBackClick}
        >
          Back
        </Button>
        <h1 className={style.cart__pageName}>Cart</h1>
        <main className={style.cart__content}>
          <CartList
            favouriteProducts={favouriteProducts}
            onDeleteClick={onDeleteClick}
            calculateTotal={calculateTotal}
          />
          <CartTotal favouriteProducts={favouriteProducts} total={total} />
        </main>
      </section>
    </div>
  );
};
