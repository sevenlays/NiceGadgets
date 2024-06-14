import { Route, Routes } from 'react-router-dom';

import { PATHS } from '../constants';
import { RouteLayout } from '../layout';
import {
  AccessoriesPage,
  CartPage,
  FavouritesPage,
  HomePage,
  ItemDetailsPage,
  PhonesPage,
  TabletsPage,
} from '../pages';

import { motion, AnimatePresence } from 'framer-motion';

const { HOME, FAVOURITES, PHONES, TABLETS, ACCESSORIES, CART } = PATHS;

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

export const HomePageWithMotion = () => (
  <motion.div {...pageTransition}>
    <HomePage />
  </motion.div>
);

export const PhonesPageWithMotion = () => (
  <motion.div {...pageTransition}>
    <PhonesPage />
  </motion.div>
);

const TabletsPageWithMotion = () => (
  <motion.div {...pageTransition}>
    <TabletsPage />
  </motion.div>
);

const AccessoriesPageWithMotion = () => (
  <motion.div {...pageTransition}>
    <AccessoriesPage />
  </motion.div>
);

const ItemDetailsPagePageWithMotion = () => (
  <motion.div {...pageTransition}>
    <ItemDetailsPage />
  </motion.div>
);

const FavouritesPagePageWithMotion = () => (
  <motion.div {...pageTransition}>
    <FavouritesPage />
  </motion.div>
);

const CartPagePageWithMotion = () => (
  <motion.div {...pageTransition}>
    <CartPage />
  </motion.div>
);

export const AppRouter = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path={HOME} element={<RouteLayout />}>
          <Route index element={<HomePageWithMotion />} />

          <Route path={FAVOURITES} element={<FavouritesPagePageWithMotion />} />

          <Route path={CART} element={<CartPagePageWithMotion />} />

          <Route path={PHONES.LIST}>
            <Route index element={<PhonesPageWithMotion />} />
            <Route
              path={PHONES.DETAILS}
              element={
                <div>
                  <ItemDetailsPagePageWithMotion />
                </div>
              }
            />
          </Route>

          <Route path={TABLETS.LIST}>
            <Route index element={<TabletsPageWithMotion />} />
            <Route
              path={TABLETS.DETAILS}
              element={
                <div>
                  <ItemDetailsPagePageWithMotion />
                </div>
              }
            />
          </Route>

          <Route path={ACCESSORIES.LIST}>
            <Route index element={<AccessoriesPageWithMotion />} />
            <Route
              path={ACCESSORIES.DETAILS}
              element={
                <div>
                  <ItemDetailsPagePageWithMotion />
                </div>
              }
            />
          </Route>

          <Route path="*" element={<div>Not found page</div>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
