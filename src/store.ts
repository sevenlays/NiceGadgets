import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './feature/cart/cartSlice';

export const store = configureStore({
  reducer: CartReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
