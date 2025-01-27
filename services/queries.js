import { useQuery } from "@tanstack/react-query";

import api from "../configs/api";

const useGetAllProducts = (page) => {
  const queryFn = () => api.get(`products?page=${page}&limit=10`);
  const queryKey = ["all-products", page];

  return useQuery({ queryFn, queryKey });
};

const useGetProduct = (id) => {
  const queryFn = () => api.get(`products/${id}`);
  const queryKey = ["one-products", id];
  return useQuery({ queryFn, queryKey });
};

export { useGetAllProducts ,useGetProduct};
