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
