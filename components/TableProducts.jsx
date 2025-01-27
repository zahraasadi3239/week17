import React, { useState } from "react";
import styles from "./TableProducts.module.css";
import Loader from "./Loader";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import api from "../configs/api";
import { Toaster,toast } from "react-hot-toast";
import { useGetAllProducts } from "../services/queries";
import { useDeleteProduct } from "../services/mutations";


function TableProducts({products,setProducts}) {

  const{mutate}=useDeleteProduct();

console.log(products)
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState(false);

  const showDeleteModal = (id) => {
    setSelectedProduct(id);
    console.log(selectedProduct);
    setDeleteModal(true);
  };
  const handleEdit = async (event) => {
    event.preventDefault();
    console.log("hello")
    try {
      const response = await api.put(`products/${editedProduct.id}`, {
        name: editedProduct.name,
        price: editedProduct.price,
        quantity: editedProduct.quantity,
      });
      const updateProducts = products.map((product) =>
        product.id === editedProduct.id ? response.data : product
      );
      setProducts(updateProducts);
      toast.success("محصول باموفقیت بروزرسانی شد")
      setEditModal(false);

      setEditedProduct({ id: "", name: "", price: "", quantity: "" });
    } catch (error) {
      toast.error("Error updating products:", error);
    }
  };
  const handleSelectProduct = (product) => {
    setEditedProduct(product);
    setEditModal(true);
  };
  const deleteProduct =()=>{
const data={
  ids:[selectedProduct],
};
console.log(data);
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
    <div className={styles.container}>
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
    </div>
  );
}

export default TableProducts;
