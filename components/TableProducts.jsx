import React, { useState } from "react";
import styles from "./TableProducts.module.css";
import Loader from "./Loader";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import api from "../configs/api";
import { Toaster,toast } from "react-hot-toast";
import { useGetAllProducts } from "../services/queries";
import { useDeleteProduct, useUpdateProduct } from "../services/mutations";
import { getCookie } from "../utils/cookie";
import { useRouter } from "next/router";


function TableProducts({products,setProducts}) {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    id:"",
    name: "",
    price: "",
    quantity: ""
  });
const router=useRouter()
  const token = getCookie("token");
 
  if(!token){
    router.push("/registration")
  }

  const{mutate}=useDeleteProduct();


  

  const showDeleteModal = (id) => {
    setSelectedProduct(id);
    console.log(selectedProduct);
    setDeleteModal(true);
  };
  const{editMutate,isPending}=useUpdateProduct()
  const handleEdit = async (event) => {
    event.preventDefault();
   editMutate(
   {
        name: editedProduct.name,
        price: editedProduct.price,
        quantity: editedProduct.quantity,
      },{
        onSuccess:(data)=>{
          const updateProducts = products.map((product) =>
            product.id === editedProduct.id ? response.data : product)
          setProducts(updateProducts);
      toast.success("محصول باموفقیت بروزرسانی شد")
      setEditModal(false);

      setEditedProduct({ id: "", name: "", price: "", quantity: "" });
        },
      
    onError:(error)=>{
      console.log(error)
    }
        
      }
      
      );
      
    
  };
  const handleSelectProduct = (product) => {
   console.log(product)
  setEditedProduct({
    ...editedProduct,name:product.name,price:product.price,quantity:product.quantity
  });
  console.log(editedProduct)
  
    setEditModal(true);
    
  };
  const deleteProduct =()=>{
const data={
  ids:[selectedProduct],
};

mutate(
  {data},
  {
    onSuccess:(data)=>{
      console.log(data);
      toast.success("محصول باموفقیت حذف شد")
setDeleteModal(false)
    },
    onError:(error)=>{
      console.log(error)
    }
  }
)

  };

  return (
   <>
{token? <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>شناسه کالا</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!products?.data?.length && <Loader/>}
          
          {products?.data?.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.id}</td>

              <td className={styles.icon}>
                <img
                  className={styles.edit}
                  onClick={() => handleSelectProduct(product)}
                  src="./edit.svg"
                />
                <img
                  src="./trash.svg"
                  onClick={() => showDeleteModal(product.id)}
                />
              </td>

              {!!editModal && (
                <EditModal
                  editModal={editModal}
                  setEditModal={setEditModal}
                  products={products}
                  setEditedProduct={setEditedProduct}
                  editedProduct={editedProduct}
                  handleEdit={handleEdit}
                />
              )}

              {!!deleteModal && (
                <DeleteModal
                  deleteModal={deleteModal}
                  setDeleteModal={setDeleteModal}
                  products={products}
                  deleteProduct={deleteProduct}
                />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    <Toaster />
    </div> :null}
   </>
  );
}

export default TableProducts;
