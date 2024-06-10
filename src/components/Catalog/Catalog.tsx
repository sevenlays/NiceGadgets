// Right now without key page rerenders way smoother. Working on solution...
/* eslint-disable react/jsx-key */
import './Catalog.scss';
import { useEffect, useState } from 'react';

import Home from '../../assets/icons/Home.svg';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import ArrowLeftBold from '../../assets/icons/ArrowLeftBold.svg';
import ArrowRightBold from '../../assets/icons/ArrowRightBold.svg';
import { fetchProducts } from '../../services/service';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Product } from '../../types/Product';
import { Button, DropdownMenu } from '../../UI';
import { sortProduct } from '../../utils/sortProduct';

type Props = {
  productType: string;
};

export const Catalog: React.FC<Props> = ({ productType }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(150);
  const [translate, setTranslate] = useState(0);
  const [sortBy, setSortBy] = useState<string>('year');

  const startIndex = (currentPage - 1) * itemsPerPage;
  const sortedPhones = sortProduct([...products], sortBy);
  const currentProducts =
    itemsPerPage === sortedPhones.length
      ? sortedPhones
      : sortedPhones.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const itemWidth = 32;
  const gapWidth = 8;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const pagesToShow = 5;
    const pageIndex = pageNumber - 1;
    const maxTranslate = -(totalPages - pagesToShow) * (itemWidth + gapWidth);
    let newTranslate = (pageIndex - 2) * -(itemWidth + gapWidth);

    if (pageIndex < 2) {
      newTranslate = 0;
    } else if (pageIndex >= totalPages - 2) {
      newTranslate = maxTranslate;
    }

    setTranslate(newTranslate);
  };

  const handleItemsPerPageChange = (items: string) => {
    if (items === 'All') {
      setItemsPerPage(products.length);
      setCurrentPage(1);
    } else {
      setItemsPerPage(parseInt(items, 10));
      setCurrentPage(1);
      setTranslate(0);
    }
  };

  const handleSortChange = (sortOption: string) => {
    setSortBy(sortOption);
  };

  useEffect(() => {
    fetchProducts(
      '/react_phone-catalog/api/products.json',
      productType.toLowerCase(),
    ).then(data => {
      setProducts(data);
    });
  }, [productType]);

  return (
    <div className="catalog">
      <div className="catalog__breadcrumbs">
        <img src={Home} alt="Breadctumbs_Path" />
        <img src={ArrowRight} alt="Breadctumbs_Path" />
        <p className="catalog__breadcrumbs__text">{productType}</p>
      </div>

      <h2 className="catalog__title">{productType}</h2>

      <p className="catalog__subtitle">{products && products.length} models</p>

      <div className="catalog__dropdowns">
        <DropdownMenu
          label="Sort by"
          options={['Newest', 'Alphabetically', 'Cheapest']}
          onSelect={handleSortChange}
        />
        <DropdownMenu
          label="Items on page"
          options={['All', '4', '8', '16']}
          onSelect={handleItemsPerPageChange}
        />
      </div>

      <div className="catalog__list">
        {currentProducts.map(productItem => (
          <ProductCard product={productItem} key={productItem.id} />
        ))}
      </div>

      {itemsPerPage < products.length && (
        <div className="catalog__pagination">
          <div className="catalog__pagination__left">
            {currentPage === 1 ? (
              <Button type="icon" size={{ height: 32 }} state="disabled">
                <img src={ArrowLeftBold} alt="Previous" />
              </Button>
            ) : (
              <Button
                type="icon"
                size={{ height: 32 }}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <img src={ArrowLeftBold} alt="Previous" />
              </Button>
            )}
          </div>

          <div className="catalog__pagination__numbers">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              const transformValue = `translateX(${translate}px)`;

              return (
                <button
                  key={page}
                  className={`pagination-number ${
                    currentPage === page ? 'selected' : ''
                  }`}
                  onClick={() => handlePageChange(page)}
                  style={{ transform: transformValue }}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <div className="catalog__pagination__right">
            {currentPage === totalPages ? (
              <Button type="icon" size={{ height: 32 }} state="disabled">
                <img src={ArrowRightBold} alt="Next" />
              </Button>
            ) : (
              <Button
                type="icon"
                size={{ height: 32 }}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <img src={ArrowRightBold} alt="Next" />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
