// import { createContext, useContext, useEffect, useState } from "react";
// import api from "../configs/api";

// export const ProductContext = createContext();

// function ProductProvider({ children }) {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await api.get('products');
//         console.log(response);
//         const res = response.data.data;
//         console.log(res);
//         setProducts(res);
//         console.log(products)
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchProducts();
//   }, [page]);

//   return (
//     <ProductContext.Provider value={{ products, page, setPage, setProducts }}>
//       {children}
//     </ProductContext.Provider>
//   );
// }

// const useProducts = () => {
//   return ({ products } = useContext(ProductContext));
// };

// const usePage = () => {
//   return ({ page } = useContext(ProductContext));
// };

// const useProductDetails = (id) => {
//   const products1= useContext(ProductContext);
//   const products=products1.products
// console.log(products)
//   const result = products.find((product) => product.id === id);

//   return result;
// };

// export default ProductProvider;
// export { useProducts, useProductDetails, usePage };
