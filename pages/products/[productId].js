import React from "react";
import { useRouter } from "next/router";
import { useGetProduct } from "../../services/queries";

function productDetails() {
  const router = useRouter();
  const { productId } = router.query;
  console.log(productId);
  const { data, isPending, isError } = useGetProduct(productId);
  console.log(data);
  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.quantity}</p>
      <p>{data?.price}هزارتومان</p>
    </div>
  );
}

export default productDetails;
