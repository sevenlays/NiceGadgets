import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/Product';

interface CartState {
  cart: Product[];
  favorites: Product[];
}

const initialState: CartState = {
  cart: [],
  favorites: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    addToFavorites: (state, action: PayloadAction<Product>) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.cart = state.favorites.filter(item => item.id !== action.payload);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToFavorites,
  removeFromFavorites,
} = cartSlice.actions;

export default cartSlice.reducer;
