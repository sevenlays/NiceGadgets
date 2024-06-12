import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import Home from '../../assets/icons/Home.svg';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import { Breadcrumb } from '../../types/Breadcrumb';

interface Props {
  breadcrumbs: Breadcrumb[];
}

export const BreadcrumbsComponent: React.FC<Props> = ({ breadcrumbs }) => {
  const location = useLocation();

  const activeIndex = breadcrumbs.findIndex(
    breadcrumb => breadcrumb.path === location.pathname,
  );

  return (
    <div className={styles.breadcrumbs}>
      <Link to={'/'} className={styles.breadcrumbs__link}>
        <img src={Home} alt="Home" />
      </Link>
      <img
        src={ArrowRight}
        alt="ArrowRight"
        className={styles.breadcrumbs__icon}
      />
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          <Link
            to={breadcrumb.path}
            className={`${styles.breadcrumbs__link} ${index === activeIndex ? styles.breadcrumbs__link__active : ''}`}
          >
            <p className={styles.breadcrumbs__text}>{breadcrumb.label}</p>
          </Link>
          {index < breadcrumbs.length - 1 && (
            <img
              src={ArrowRight}
              alt="ArrowRight"
              className={styles.breadcrumbs__icon}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
