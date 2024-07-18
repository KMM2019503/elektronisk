export interface Billboard {
  id: string;
  storeId: string;
  label: string;
  imgUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  storeId: string;
  billboardId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  billboard: Billboard;
}

export interface Image {
  id: string;
  productId: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export interface Backcolor {
  id: string;
  storeId: string;
  color: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}
export interface Product {
  id: string;
  storeId: string;
  categoryId: string;
  backcolorId: string;
  name: string;
  price: string;
  isFeatured: boolean;
  isAchived: boolean;
  createdAt: string;
  updatedAt: string;
  category: Category;
  backcolor: Backcolor;
  images: Image[];
}
