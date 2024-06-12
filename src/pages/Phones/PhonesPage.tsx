import { Catalog } from '../../components/Catalog/Catalog';
import '../../pages/pages.scss';

export const PhonesPage = () => {
  return (
    <div className="page__container">
      <Catalog productType="phones" />
    </div>
  );
};
