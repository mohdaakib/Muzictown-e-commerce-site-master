import React from "react";
import { Link } from "react-router-dom";
import "../css/displayProduct.css";

export default function DisplayProduct() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };

  return (
    <div>
      <div id="displayProduct">
        <div className="productDeatials">
          <p className="newProd">new product</p>
          <h2 className="prodName">xx99 mark ii headphones</h2>
          <p className="prodInfo">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <button className="seeProd">
          <Link
              to={`/product_details/xx99%20mark%20ii%20headphones`}
              state={1}
              onClick={scrollToTop}
            >
              see Product
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
