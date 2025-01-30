/* eslint-disable @typescript-eslint/no-explicit-any */
export type TLink = {
  name: string;
  href: string;
};

export type TLoginValues = {

  email: string;
  password: string;
};
export type TRegisterValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
};

export interface FormInputProps<T> {
  control: any;
  name: keyof T;
  label: string;
  type?: string;
  placeholder: string;
}

export interface TProduct {
  _id: string;
  userId: string;
  name: string;
  description: string;
  image?: string;
  rating?: number;
  brand: string;
  price: number;
  model: string;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}