import { Product } from '../pages/Cart/type/ProductType';
import { Theme } from './Theme';

export interface AppStorageState {
  cart: string[];
  favorites: string[];
  products: {
    phones: Product[];
    tablets: Product[];
    accessories: Product[];
  };
  loading: boolean;
  error: string | null;
  theme: Theme;
}
