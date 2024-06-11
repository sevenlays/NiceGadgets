import { Product } from '../pages/Cart/type/ProductType';

export function getHotPrices(products: Product[]) {
  const sortedByDiscount = products.sort(
    (a, b) => b.fullPrice - b.price - (a.fullPrice - a.price),
  );

  return sortedByDiscount.slice(0, 30);
}

export function getBrandNewModels(products: Product[]) {
  return products.filter(product => product.year === 2022);
}
