import './AccessoriesPage.scss';
import { BreadcrumbsComponent } from '../../UI/Breadcrumbs/Breadcrumbs';
import { Catalog } from '../../components/Catalog/Catalog';
import { PATHS } from '../../constants';
import { Breadcrumb } from '../../types/Breadcrumb';

const breadcrumbsData: Breadcrumb[] = [
  { label: 'Accessories', path: PATHS.ACCESSORIES.LIST },
];

export const AccessoriesPage = () => {
  return (
    <div className="page__container">
      <BreadcrumbsComponent breadcrumbs={breadcrumbsData} />
      <Catalog productType="Accessories" />
    </div>
  );
};
