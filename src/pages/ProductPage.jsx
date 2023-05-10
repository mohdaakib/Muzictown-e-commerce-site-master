import React from "react";
import ProductDetails from "../components/ProductDetails.jsx";

export default function ProductPage({ data, handleClick, total }) {
  return (
    <div>
      <ProductDetails data={data} handleClick={handleClick} total={total} />
    </div>
  );
}
