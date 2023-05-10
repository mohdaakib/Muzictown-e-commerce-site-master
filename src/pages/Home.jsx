import React from "react";
import Categories from "../components/Categories.jsx";
import DisplayProduct from "../components/DisplayProduct.jsx";
import MoreProducts from "../components/MoreProducts.jsx";
import "../css/home.css";

export default function Home() {
  return (
    <div>
      <DisplayProduct />
      <Categories />
      <MoreProducts />
    </div>
  );
}
