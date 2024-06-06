/* eslint-disable react/jsx-key */
import './App.scss';
import { Button, DropdownMenu } from './UI';
import { Header } from './components/HeaderComponents/Header/Header';
import React, { useEffect, useState } from 'react';

import ArrowLeft from './assets/icons/ArrowLeftBold.svg';
import ArrowRight from './assets/icons/ArrowRightBold.svg';
import { Product } from './types/Product';
import { fetchProducts } from './services/service';
import { ProductCard } from './components/ProductCard/ProductCard';

export const App: React.FC = () => {
  const [phones, setPhones] = useState<Product[] | null>(null);

  useEffect(() => {
    fetchProducts('/api/products.json', 'phones').then(data => {
      setPhones(data);
    });
  }, [phones]);

  return (
    <div className="App">
      <Header />
      <div className="catalog">
        <div className="catalog__breadcrumbs">{'> Phones'}</div>

        <h2 className="catalog__title">Mobile phones</h2>

        <p className="catalog__subtitle">{phones && phones.length} models</p>

        <div className="catalog__dropdowns">
          <DropdownMenu
            label="Sort by"
            options={['Newest', 'Alphabetically', 'Cheapest']}
          />
          <DropdownMenu
            label="Items on page"
            options={['4', '8', '16', 'All']}
          />
        </div>

        <div className="catalog__list">
          {phones && phones.map(() => <ProductCard />)}
        </div>

        <div className="catalog__pagination">
          <div className="catalog__pagination__left">
            <Button type="icon" size={{ height: 32 }}>
              <img src={ArrowLeft} alt="Left" />
            </Button>
          </div>
          <div className="catalog__pagination__numbers">
            <Button type="number" size={{ height: 32 }}>
              1
            </Button>
            <Button type="number" state="selected" size={{ height: 32 }}>
              2
            </Button>
            <Button type="number" size={{ height: 32 }}>
              3
            </Button>
            <Button type="number" size={{ height: 32 }}>
              4
            </Button>
          </div>
          <div className="catalog__pagination__right">
            <Button type="icon" size={{ height: 32 }}>
              <img src={ArrowRight} alt="Left" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
