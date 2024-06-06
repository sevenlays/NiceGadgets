import { Route, Routes } from 'react-router-dom';

import { PATHS } from '../constants';
import { RouteLayout } from '../layout';
import {
  AccessoriesPage,
  CartPage,
  FavouritesPage,
  HomePage,
  PhonesPage,
  TabletsPage,
} from '../pages';

const { HOME, FAVOURITES, PHONES, TABLETS, ACCESSORIES, CART } = PATHS;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME} element={<RouteLayout />}>
        <Route index element={<HomePage />} />

        <Route path={FAVOURITES} element={<FavouritesPage />} />

        <Route path={CART} element={<CartPage />} />

        <Route path={PHONES.LIST}>
          <Route index element={<PhonesPage />} />
          <Route
            path={PHONES.DETAILS}
            element={<div>Single Phone Details</div>}
          />
        </Route>

        <Route path={TABLETS.LIST}>
          <Route index element={<TabletsPage />} />
          <Route
            path={TABLETS.DETAILS}
            element={<div>Single Tablet Details</div>}
          />
        </Route>

        <Route path={ACCESSORIES.LIST}>
          <Route index element={<AccessoriesPage />} />
          <Route
            path={ACCESSORIES.DETAILS}
            element={<div>Single Accessories Details</div>}
          />
        </Route>

        <Route path="*" element={<div>Not found page</div>} />
      </Route>
    </Routes>
  );
};
