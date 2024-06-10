import { Link } from 'react-router-dom';
import { SliderSection, HomeSlider } from '../../components';

import styles from './HomePage.module.scss';

export const HomePage = () => (
  <div className={styles['page-wrapper']}>
    <section>
      <div className={styles.container}>
        <h1 className={styles['main-title']}>Welcome to Nice Gadgets store!</h1>
      </div>
      <HomeSlider />
    </section>

    <SliderSection
      title="Brand new models"
      prevButtonClass="buttonBrand-prev"
      nextButtonClass="buttonBrand-next"
    />

    <section className={styles['shop-by-category']}>
      <div className={styles.container}>
        <h2 className={styles.title}>Shop by category</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <Link to="/phones" className={styles.link}>
              <div className={styles.image} />
              <h3 className={styles.subtitle}>Mobile phones</h3>
              <p className={styles.description}> 123 models</p>
            </Link>
          </div>
          <div className={styles.card}>
            <Link to="/tablets" className={styles.link}>
              <div className={`${styles.image} ${styles.tablets}`} />
              <h3 className={styles.subtitle}>Tablets</h3>
              <p className={styles.description}> 123 models</p>
            </Link>
          </div>
          <div className={styles.card}>
            <Link to="/accessories" className={styles.link}>
              <div className={`${styles.image} ${styles.accessories}`} />
              <h3 className={styles.subtitle}>Accessories</h3>
              <p className={styles.description}> 123 models</p>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <SliderSection
      title="Hot prices"
      prevButtonClass="buttonHotPrice-prev"
      nextButtonClass="buttonHotPrice-next"
    />
  </div>
);
