import React, { useEffect } from "react";
import TableProducts from "../../components/TableProducts";
import ProductsList from "../../components/ProductsList";
import { useAuth } from "../../provider/AuthProvider";
import { useRouter } from "next/router";
import { getCookie } from "../../utils/cookie";

function products() {
  // const router = useRouter();
  // let token = null;
  // useEffect(() => {
  //   token = getCookie("token");
  // }, [token]);
  // useEffect(() => {
  //   if (!token) {
  //     router.push("/registration");
  //   }else{

  //   }
  // }, []);

  return (
    <div>
      <ProductsList />
    </div>
  );
}

export default products;
