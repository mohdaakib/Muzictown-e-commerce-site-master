import React from "react";
import "../css/earphone.css";
import { data } from "../data/productData.jsx";
import { Link } from "react-router-dom";
import Categories from "../components/Categories.jsx";

export default function Earphone() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };
  return (
    <div id="earphone">
      <div className="mainTitle">
        <p>earphones</p>
      </div>

      <div id="speakerList">
        {data.map(
          ({ id, prodName, prodInfo, image }) =>
            id === 6 && (
              <div key={id} className={"prodBox " + (id === 7 && "flip")}>
                <img src={image} alt="productImage" className="headphoneImg" />
                <div className="headphoneDetails">
                  {id === 6 && <p className="newProd">new product</p>}
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
      
      <Categories />
    </div>
  );
}
