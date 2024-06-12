import { Catalog } from '../../components/Catalog/Catalog';
import '../../pages/pages.scss';

export const AccessoriesPage = () => {
  return (
    <div className="page__container">
      <Catalog productType="accessories" />
    </div>
  );
};
