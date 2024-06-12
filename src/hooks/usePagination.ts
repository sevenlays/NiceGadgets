import { useState } from 'react';

const usePagination = <T>(items: T[], defaultItemsPerPage = 150) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems =
    itemsPerPage === items.length
      ? items
      : items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (itemsCount: string) => {
    if (itemsCount === 'All') {
      setItemsPerPage(items.length);
      setCurrentPage(1);
    } else {
      setItemsPerPage(parseInt(itemsCount, 10));
      setCurrentPage(1);
    }
  };

  return {
    currentPage,
    itemsPerPage,
    totalPages,
    currentItems,
    handlePageChange,
    handleItemsPerPageChange,
  };
};

export default usePagination;
