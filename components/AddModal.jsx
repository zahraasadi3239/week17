import React from "react";

import styles from "./AddModal.module.css";

function AddModal({
  addModal,
  setAddModal,
  handleAddProduct,
  setNewProduct,
  newProduct,
}) {
  const handleChange = (event) => {
    
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]:value,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.addBox}>
        <h4>ویرایش اطلاعات</h4>

        <form onSubmit={handleAddProduct}>
          <div className={styles.inputs}>
            <p className={styles.tilte}>نام کالا</p>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
            />
            <p>تعداد موجودی</p>
            <input
              type="number"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleChange}
            />
            <p>قیمت</p>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="sumbit" className={styles.newRegister}>
              ایجاد
            </button>
            <button onClick={() => setAddModal(null)} className={styles.cancel}>
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
