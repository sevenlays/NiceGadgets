import './Pagination.scss';
import React from 'react';
/* eslint-disable max-len */
import { ReactComponent as ArrowLeftBold } from '../../assets/icons/ArrowLeftBold.svg';
import { ReactComponent as ArrowRightBold } from '../../assets/icons/ArrowRightBold.svg';
import { Button } from '..';

const BUTTON_TRANSITION = 'background-color 0.3s, transform 0.3s ease-in-out';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const itemWidth = 32;
  const gapWidth = 8;

  const translate = (currentPage - 1 - 2) * -(itemWidth + gapWidth);
  const maxTranslate = -(totalPages - 5) * (itemWidth + gapWidth);
  const newTranslate = Math.max(Math.min(translate, 0), maxTranslate);

  const styles = {
    transform: `translateX(${newTranslate}px)`,
    transition: BUTTON_TRANSITION,
  };

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <div>
        {currentPage === 1 ? (
          <Button type="icon" size={{ height: 32 }} state="disabled">
            <ArrowLeftBold className="pagination__arrow" />
          </Button>
        ) : (
          <Button
            type="icon"
            size={{ height: 32 }}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ArrowLeftBold className="pagination__arrow" />
          </Button>
        )}
      </div>

      <div className="pagination__numbers">
        {pageNumbers.map(page => {
          return currentPage === page ? (
            <Button
              type="number"
              state="selected"
              size={{ height: 32 }}
              onClick={() => onPageChange(page)}
              style={styles}
            >
              {page}
            </Button>
          ) : (
            <Button
              type="number"
              size={{ height: 32 }}
              onClick={() => onPageChange(page)}
              style={styles}
            >
              {page}
            </Button>
          );
        })}
      </div>

      <div>
        {currentPage === totalPages ? (
          <Button type="icon" size={{ height: 32 }} state="disabled">
            <ArrowRightBold className="pagination__arrow" />
          </Button>
        ) : (
          <Button
            type="icon"
            size={{ height: 32 }}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <ArrowRightBold className="pagination__arrow" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
