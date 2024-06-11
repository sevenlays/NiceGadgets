import './PhonesPage.scss';
import { BreadcrumbsComponent } from '../../UI/Breadcrumbs/Breadcrumbs';
import { Catalog } from '../../components/Catalog/Catalog';
import { PATHS } from '../../constants';
import { Breadcrumb } from '../../types/Breadcrumb';

const breadcrumbsData: Breadcrumb[] = [
  { label: 'Phones', path: PATHS.PHONES.LIST },
];

export const PhonesPage = () => {
  return (
    <div className="page__container">
      <BreadcrumbsComponent breadcrumbs={breadcrumbsData} />
      <Catalog productType="Phones" />
    </div>
  );
};
