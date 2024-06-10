import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductStorageState {
  cart: string[];
  favorites: string[];
}

const initialState: ProductStorageState = {
  cart: [],
  favorites: [],
};

const productSlice = createSlice({
  name: 'productStorage',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.cart = state.cart.filter(itemId => itemId !== action.payload);
    },
    addToFavorites: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.favorites = state.favorites.filter(
        itemId => itemId !== action.payload,
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToFavorites,
  removeFromFavorites,
} = productSlice.actions;

export default productSlice.reducer;
