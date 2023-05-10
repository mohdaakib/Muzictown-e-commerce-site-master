import React from "react";
import { Link } from "react-router-dom";
import "../css/headphoneList.css";
import { data } from "../data/productData.jsx";

export default function HeadphoneList() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };
  return (
    <div id="headphoneList">
      {data.map(
        ({ id, prodName, prodInfo, image }) =>
          id <= 3 && (
            <div key={id} className={"prodBox " + (id === 2 && "flip")}>
              <img src={image} alt="productImage" className="headphoneImg" />
              <div className="headphoneDetails">
                {id === 1 && <p className="newProd">new product</p>}

                <h2 className="prodName">{prodName}</h2>
                <p className="prodInfo">{prodInfo}</p>
                <Link
                  to={`/product_details/${prodName}`}
                  state={id}
                  onClick={scrollToTop}
                >
                  <button className="seeProd">see Product</button>
                </Link>
              </div>
            </div>
          )
      )}
    </div>
  );
}
