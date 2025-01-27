import React from "react";
import styles from "./EditeModal.module.css";

function EditModal({
  setEditModal,
  setEditedProduct,
  editedProduct,
  handleEdit,
}) {
  // const handleEdit=()=>{
  //   console.log("hello")
  // }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.editBox}>
        <h4>ویرایش اطلاعات</h4>

        <div className={styles.inputs}>
          <p className={styles.tilte}>نام کالا</p>
          {/* <form onSubmit={handleEdit}> */}
            <input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleChange}
            />
            <p>تعداد موجودی</p>
            <input
              type="number"
              name="quantity"
              value={editedProduct.quantity}
              onChange={handleChange}
            />
            <p>قیمت</p>
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
            />
          {/* </form> */}
        </div>

        <div>
          <button onClick={handleEdit} className={styles.newRegister}>
            ثبت اطلاعات جدید
          </button>
          <button onClick={() => setEditModal(null)} className={styles.cancel}>
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
