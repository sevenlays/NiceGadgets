import { Product } from '../types/Product';

export const sortProduct = (
  productArray: Product[],
  criterion: string,
): Product[] => {
  return productArray.sort((a, b) => {
    if (criterion === 'Newest') {
      return b.year - a.year;
    } else if (criterion === 'Cheapest') {
      return a.price - b.price;
    } else if (criterion === 'Alphabetically') {
      return a.name.localeCompare(b.name);
    }

    return 0;
  });
};
