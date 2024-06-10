import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import ProductReducer from './feature/cart/productSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from 'redux-persist';

const persistConfig = {
  key: 'productStorage',
  storage,
};

const persistedReducer = persistReducer(persistConfig, ProductReducer);

export const store = configureStore({
  reducer: { productStorage: persistedReducer },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
