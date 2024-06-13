import styles from './Catalog.module.scss';
import { useState } from 'react';

import { ProductCard } from '../../components/ProductCard/ProductCard';
import { DropdownMenu } from '../../UI';
import { sortProduct } from '../../utils/sortProduct';
import Pagination from '../../UI/Pagination/Pagination';

import usePagination from '../../hooks/usePagination';
import useProductsByType from '../../hooks/useProductsByType';
import useCatalogTranslations from '../../hooks/useCatalogTranslations';
import { useTranslation } from 'react-i18next';
import i18n from '../../providers/i18n/i18n';
// eslint-disable-next-line max-len
import getLocalizedModelCountString from '../../utils/getLocalizedModelCountString';

type Props = {
  productType: string;
};

export const Catalog: React.FC<Props> = ({ productType }) => {
  const { t: localize } = useTranslation();
  const [sortBy, setSortBy] = useState<string>('newest');

  const products = useProductsByType(productType);
  const sortedProducts = sortProduct(products, sortBy);

  const {
    currentPage,
    itemsPerPage,
    totalPages,
    currentItems: currentProducts,
    handlePageChange,
    handleItemsPerPageChange,
  } = usePagination(sortedProducts);

  const { SORTBY_TRANSLATED_TO_ENGLISH, localizedSortOptions, ITEMS_ON_PAGE } =
    useCatalogTranslations();

  const handleSortChange = (translatedSortOption: string) => {
    const englishSortOption =
      SORTBY_TRANSLATED_TO_ENGLISH[translatedSortOption];

    setSortBy(englishSortOption);
  };

  return (
    <div className={styles.catalog}>
      <h2 className={styles.catalog__title}>
        {localize(`${productType.toLowerCase()}.title`)}
      </h2>

      <p className={styles.catalog__subtitle}>
        {products &&
          getLocalizedModelCountString(products.length, localize, i18n)}
      </p>

      <div className={styles.catalog__dropdowns}>
        <DropdownMenu
          label={localize('catalog.sortBy')}
          options={localizedSortOptions}
          onSelect={handleSortChange}
        />
        <DropdownMenu
          label={localize('catalog.itemsOnPage')}
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
