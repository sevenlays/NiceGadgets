// Right now without key page rerenders way smoother. Working on solution...
/* eslint-disable react/jsx-key */
import './Catalog.scss';
import { useEffect, useState } from 'react';

import Home from '../../assets/icons/Home.svg';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import { fetchProducts } from '../../services/service';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Product } from '../../types/Product';
import { DropdownMenu } from '../../UI';
import { sortProduct } from '../../utils/sortProduct';
import Pagination from '../../UI/Pagination/Pagination';

const SORTBY_OPTIONS = ['Newest', 'Alphabetically', 'Cheapest'];
const ITEMS_ON_PAGE = ['All', '4', '8', '16'];

type Props = {
  productType: string;
};

export const Catalog: React.FC<Props> = ({ productType }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(150);
  const [sortBy, setSortBy] = useState<string>('year');

  const startIndex = (currentPage - 1) * itemsPerPage;
  const sortedPhones = sortProduct([...products], sortBy);
  const currentProducts =
    itemsPerPage === sortedPhones.length
      ? sortedPhones
      : sortedPhones.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (items: string) => {
    if (items === 'All') {
      setItemsPerPage(products.length);
      setCurrentPage(1);
    } else {
      setItemsPerPage(parseInt(items, 10));
      setCurrentPage(1);
    }
  };

  const handleSortChange = (sortOption: string) => {
    setSortBy(sortOption);
  };

  useEffect(() => {
    fetchProducts(
      '/react_phone-catalog/api/products.json',
      'category',
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
          options={SORTBY_OPTIONS}
          onSelect={handleSortChange}
        />
        <DropdownMenu
          label="Items on page"
          options={ITEMS_ON_PAGE}
          onSelect={handleItemsPerPageChange}
        />
      </div>

      <div className="catalog__list">
        {currentProducts.map(productItem => (
          <ProductCard product={productItem} />
        ))}
      </div>

      {itemsPerPage < products.length && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
