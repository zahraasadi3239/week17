import React, { useEffect } from "react";
import api from "../configs/api";
import styles from "./DeleteModal.module.css";

function DeleteModal({
  deleteModal,
  setDeleteModal,
  products,
  setProducts,
  deleteProduct,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.deleteBox}>
        <img src="./Close.png" />
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div>
          <button className={styles.delete} onClick={deleteProduct}>
            حذف
          </button>
          <button
            className={styles.cancel}
            onClick={() => setDeleteModal(null)}
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
