import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductsList.module.css";

import { ProductContext, useProducts } from "../context/ProductContext";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import TableProducts from "../components/TableProducts";
import ProductManagement from "../components/ProductManagement";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { useGetAllProducts } from "../services/queries";
import Loader from "./Loader";

function ProductsList() {

  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const { data, isPending, isError } = useGetAllProducts(page);
  console.log(data)
  const [search, setSearch] = useState();
if(isPending) return <Loader/>
if(isError) return <p>Something went wrong!</p>
  return (
    <div>
      
       <Search
        search={search}
        setSearch={setSearch}
        products={data}
        setProducts={setProducts}
      />  

      <ProductManagement
        page={page}
        setPage={setPage}
        products={data}
        setProducts={setProducts}
      />
      <TableProducts  products={data} setProducts={setProducts}/>
      
      <Pagination page={page} setPage={setPage} /> 
    </div>
  );
}

export default ProductsList;
