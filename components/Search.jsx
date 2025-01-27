import React, { useState } from "react";
import Loader from "./Loader";

import styles from "./Search.module.css";

import UserIsloggedIn from "./UserIsloggedIn";

function Search({ search, setSearch, products, setProducts }) {
  const searchHandler = () => {
    if(search){
      const newProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search)
      );
      setProducts(newProducts);
     
     
    }else{
      setProducts(products)
    }
  };

  return (
    <div className={styles.searchContainer}>
      {!search  && <Loader />}
      <div className={styles.container}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="جستجو کالا"
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}
       
      />
     <img
        className={styles.searchIcon}
        onClick={searchHandler}
        src="./search-normal.png"
      />

</div>
      <UserIsloggedIn />
    </div>
  );
}

export default Search;
