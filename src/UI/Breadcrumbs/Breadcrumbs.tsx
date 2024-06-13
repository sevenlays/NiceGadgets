import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';
import { ReactComponent as Home } from '../../assets/icons/Home.svg';
import { ReactComponent as Arrow } from '../../assets/icons/ArrowRight.svg';
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
    <div className="breadcrumbs">
      <Link to={'/'} className="breadcrumbs__link">
        <Home className="breadcrumbs__home" />
      </Link>
      <Arrow className="breadcrumbs__icon" />
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={index}>
          <Link
            to={breadcrumb.path}
            className={`breadcrumbs__link ${index === activeIndex ? 'breadcrumbs__link--active' : ''}`}
          >
            <p className="breadcrumbs__text">{breadcrumb.label}</p>
          </Link>
          {index < breadcrumbs.length - 1 && (
            <Arrow className="breadcrumbs__icon" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
