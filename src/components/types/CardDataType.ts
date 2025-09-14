export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  size: string[];
  isNew: boolean;
  gender: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

