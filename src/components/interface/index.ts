import { BaseQueryApi } from "@reduxjs/toolkit/query";

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
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
}