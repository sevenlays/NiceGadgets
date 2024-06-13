import { Product } from '../pages/Cart/type/ProductType';

export function getProductsFromStorage(
  allProd: Product[],
  itemIds: string[],
): Product[] | null {
  const prods = itemIds.map(itemIdFromStorage => {
    return allProd.find(prod => prod.itemId === itemIdFromStorage || null);
  });

  return prods as Product[];
}
