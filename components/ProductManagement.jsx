import React, { useEffect, useState } from "react";
import styles from "./ProductManagement.module.css";
import AddModal from "./AddModal";
import { RiTyphoonFill } from "react-icons/ri";
import api from "../configs/api";
import { Toaster ,toast} from "react-hot-toast";
import { useCreateProduct } from "../services/mutations";



function ProductManagement({ products, setProducts,page }) {
  const [addModal, setAddModal] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    quantity: "",
    price: "",
  });
const {mutate, isPending}=useCreateProduct()
  const handleAddProduct =  (event) => {
    event.preventDefault();
   
   if(isPending) return
   const{name,price}=newProduct;
   if(!name || !price) return;
   mutate(newProduct,{
    onSuccess:(data)=>{
      console.log(data);
      
      toast.success("محصول باموفقیت اضافه شد")
      setAddModal(false);
      setNewProduct({ name: "", quantity: "", price: "" });
    },
    onError:(error)=>{
      console.log(error)
    }
   })
  };

  return (
    <div className={styles.container}>
      <div className={styles.productManagment}>
        <img src="./setting.svg" />
        <p>مدیریت کالا</p>
      </div>
      <button onClick={() => setAddModal(true)}>افزودن محصول</button>
      {!!addModal && (
        <AddModal
          addModal={addModal}
          setAddModal={setAddModal}
          handleAddProduct={handleAddProduct}
          setNewProduct={setNewProduct}
          newProduct={newProduct}
        />
      )}
  <Toaster/>
    </div>
  );
}

export default ProductManagement;
