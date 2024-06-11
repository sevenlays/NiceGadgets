import './TabletsPage.scss';
import { BreadcrumbsComponent } from '../../UI/Breadcrumbs/Breadcrumbs';
import { Catalog } from '../../components/Catalog/Catalog';
import { PATHS } from '../../constants';
import { Breadcrumb } from '../../types/Breadcrumb';

const breadcrumbsData: Breadcrumb[] = [
  { label: 'Tablets', path: PATHS.TABLETS.LIST },
];

export const TabletsPage = () => {
  return (
    <div className="page__container">
      <BreadcrumbsComponent breadcrumbs={breadcrumbsData} />
      <Catalog productType="Tablets" />
    </div>
  );
};
