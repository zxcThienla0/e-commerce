import type { Product } from './CardDataType';

export interface CartItem extends Product {
  quantity: number;
}