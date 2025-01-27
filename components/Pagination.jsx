import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 6) return;
    setPage((page) => page + 1);
  };
  return (
    <div className={styles.pagination}>
         <button
        onClick={previousHandler}
        className={page === 1 ? styles.disabled : null}
      >
        previous
      </button>
      
      <p className={page === 1 ? styles.selected : null}>1</p>
      <p className={page === 2 ? styles.selected : null}>2</p>
      <p className={page === 3 ? styles.selected : null}>3</p>
      <p className={page === 4 ? styles.selected : null}>4</p>
      <p className={page === 5 ? styles.selected : null}>5</p>
      <p className={page === 5 ? styles.selected : null}>6</p>
      <button
        onClick={nextHandler}
        className={page === 6 ? styles.disabled : null}
      >
        next
      </button>
     
    </div>
  );
}

export default Pagination;
