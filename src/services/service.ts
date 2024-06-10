import { Product } from '../types/Product';

const filterByCategory = (products: Product[], category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const fetchProducts = (url: string, category?: string): Promise<any> => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .then((data: Product[]) => {
      if (category) {
        return filterByCategory(data, category);
      }

      return data;
    });
};
