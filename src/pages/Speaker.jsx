import React from "react";
import "../css/speaker.css";
import { data } from "../data/productData.jsx";
import Categories from "../components/Categories.jsx";
import { Link } from "react-router-dom";

export default function Speaker() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };

  return (
    <div id="speaker">
      <div className="mainTitle">
        <p>speakers</p>
      </div>

      <div id="speakerList">
        {data.map(
          ({ id, prodName, prodInfo, image }) =>
            id > 3 &&
            id < 6 && (
              <div key={id} className={"prodBox " + (id === 5 && "flip")}>
                <img src={image} alt="productImage" className="headphoneImg" />
                <div className="headphoneDetails">
                  {id === 4 && <p className="newProd">new product</p>}
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
