import styles from './Catalog.module.scss';
import { useEffect, useState } from 'react';

import { getProduct } from '../../services/service';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Product } from '../../types/Product';
import { DropdownMenu } from '../../UI';
import { sortProduct } from '../../utils/sortProduct';
import Pagination from '../../UI/Pagination/Pagination';
import usePagination from '../../hooks/usePagination';

const SORTBY_OPTIONS = ['Newest', 'Alphabetically', 'Cheapest'];
const ITEMS_ON_PAGE = ['All', '4', '8', '16'];

type Props = {
  productType: string;
};

export const Catalog: React.FC<Props> = ({ productType }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<string>('year');

  const sortedProducts = sortProduct(products, sortBy);

  const {
    currentPage,
    itemsPerPage,
    totalPages,
    currentItems: currentProducts,
    handlePageChange,
    handleItemsPerPageChange,
  } = usePagination(sortedProducts);

  const handleSortChange = (sortOption: string) => {
    setSortBy(sortOption);
  };

  useEffect(() => {
    getProduct('products', 'category', productType.toLowerCase()).then(data => {
      setProducts(data);
    });
  }, [productType]);

  return (
    <div className={styles.catalog}>
      <h2 className={styles.catalog__title}>{productType}</h2>

      <p className={styles.catalog__subtitle}>
        {products && products.length} models
      </p>

      <div className={styles.catalog__dropdowns}>
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

      <div className={styles.catalog__list}>
        {currentProducts.map(productItem => (
          <ProductCard product={productItem} key={productItem.id} />
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
