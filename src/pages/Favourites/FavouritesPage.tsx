import { useEffect, useState } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import styles from './FavouritesPage.module.scss';

export const FavouritesPage = () => {
  const [favouriteGoods, setFavouriteGoods] = useState<string[]>([]);

  const favourArr = ['good1', 'good2', 'good3', 'good4', 'good5', 'good6'];
  const storageArr = JSON.stringify(favourArr);

  window.localStorage.setItem('favourites', storageArr);

  useEffect(() => {
    const storedFavourites = window.localStorage.getItem('favourites');

    if (storedFavourites) {
      setFavouriteGoods(JSON.parse(storedFavourites));
    }
  }, []);

  const goodsLength = favouriteGoods.length;

  return (
    <div className={styles.page__container}>
      <h2 className={styles.title}>Favourites</h2>
      <p className={styles.counter}>{goodsLength} items</p>

      <div className={styles.products}>
        {goodsLength === 0 ? (
          <div>There are no goods in your favourite list</div>
        ) : (
          favouriteGoods.map(item => {
            return (
              <div key={item} className={styles.product}>
                <ProductCard />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
