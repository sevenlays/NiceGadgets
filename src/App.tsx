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
  const [phones, setPhones] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProducts = phones.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(phones.length / itemsPerPage);

  const getDisplayedPages = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    if (end - start + 1 < 5) {
      if (start === 1) {
        end = Math.min(5, totalPages);
      } else if (end === totalPages) {
        start = Math.max(1, totalPages - 4);
      }
    }

    const pages = [];

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const displayedPages = getDisplayedPages();

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (items: string) => {
    setItemsPerPage(parseInt(items, 10));
    setCurrentPage(1);
  };

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
            onSelect={handleItemsPerPageChange}
          />
        </div>

        <div className="catalog__list">
          {currentProducts.map(product => (
            <ProductCard product={product} />
          ))}
        </div>

        <div className="catalog__pagination">
          <div className="catalog__pagination__left">
            {currentPage === 1 ? (
              <Button type="icon" size={{ height: 32 }} state="disabled">
                <img src={ArrowLeft} alt="Previous" />
              </Button>
            ) : (
              <Button
                type="icon"
                size={{ height: 32 }}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <img src={ArrowLeft} alt="Previous" />
              </Button>
            )}
          </div>

          <div className="catalog__pagination__numbers">
            {displayedPages.map((page, index) => (
              <Button
                key={index}
                type="number"
                size={{ height: 32 }}
                state={currentPage === page ? 'selected' : undefined}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}
          </div>

          <div className="catalog__pagination__right">
            {currentPage === totalPages ? (
              <Button type="icon" size={{ height: 32 }} state="disabled">
                <img src={ArrowRight} alt="Next" />
              </Button>
            ) : (
              <Button
                type="icon"
                size={{ height: 32 }}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <img src={ArrowRight} alt="Next" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
