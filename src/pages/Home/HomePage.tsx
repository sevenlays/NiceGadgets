import { Link } from 'react-router-dom';
import { SliderSection, HomeSlider } from '../../components';

import styles from './HomePage.module.scss';
import { Product } from '../Cart/type/ProductType';
import { useEffect, useState } from 'react';

import { getProduct } from '../../services/service';
import {
  getBrandNewModels,
  getHotPrices,
} from '../../services/filteForSliders';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    getProduct('products').then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <div className={styles['page-wrapper']}>
      <section>
        <div className={styles.container}>
          <h1 className={styles['main-title']}>{t('homePage.welcome')}</h1>
        </div>
        <HomeSlider />
      </section>

      <SliderSection
        title={t('homePage.brandNewModels')}
        prevButtonClass="buttonBrand-prev"
        nextButtonClass="buttonBrand-next"
        arrayToMap={getBrandNewModels(products)}
      />

      <section className={styles['shop-by-category']}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('homePage.shopByCategory')}</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <Link to="/phones" className={styles.link}>
                <div className={styles.image} />
                <h3 className={styles.subtitle}>
                  {t('homePage.mobilePhones')}
                </h3>
                <p className={styles.description}>123 {t('homePage.models')}</p>
              </Link>
            </div>
            <div className={styles.card}>
              <Link to="/tablets" className={styles.link}>
                <div className={`${styles.image} ${styles.tablets}`} />
                <h3 className={styles.subtitle}>{t('homePage.tablets')}</h3>
                <p className={styles.description}>123 {t('homePage.models')}</p>
              </Link>
            </div>
            <div className={styles.card}>
              <Link to="/accessories" className={styles.link}>
                <div className={`${styles.image} ${styles.accessories}`} />
                <h3 className={styles.subtitle}>{t('homePage.accessories')}</h3>

                <p className={styles.description}>123 {t('homePage.models')}</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SliderSection
        title={t('homePage.hotPrices')}
        prevButtonClass="buttonHotPrice-prev"
        nextButtonClass="buttonHotPrice-next"
        arrayToMap={getHotPrices(products)}
        withDiscount={true}
      />
    </div>
  );
};
