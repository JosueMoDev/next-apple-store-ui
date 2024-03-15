export interface Product {
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  price: number;
  subCategory: SubCategory;
  stockByColor: StockByColor[];
  picturesByColor: PicturesByColor[];
  chip?: Chip;
}

export interface Chip {
  name: string;
  id: string;
  chipFamilyName: string;
  gama: string;
  storageOnChip: OnChip[];
  unifedMemoryOnChip: OnChip[];
  configOnChip: ConfigOnChip[];
}

export interface ConfigOnChip {
  id: string;
  gpu: CPU;
  cpu: CPU;
  neuralEngine: string;
  price: number;
}

export interface CPU {
  id: string;
  cores: number;
}

export interface OnChip {
  id: string;
  storage?: Storage;
  price: number;
  unifiedMemory?: Storage;
}


export interface Storage {
  id: string;
  capacity: number;
  capacityOn?: CapacityOn;
}


export enum CapacityOn {
  GB = "GB",
  TB = "TB",
}

export interface PicturesByColor {
  color: string;
  productPictures: ProductPicture[];
}

export interface ProductPicture {
  id: string;
  url: string;
}


export interface StockByColor {
  stock: number;
  color: Color;
  id: string;
}

export interface Color {
  name: string;
  id: string;
  hexadecimalColor: string;
  release: Date;
}

export interface SubCategory {
  name: string;
  id: string;
  slug: string;
  gender: string;
  isActive: boolean;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
}
