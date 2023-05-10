import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/productDetails.css";
// import {data} from "../data/productData.jsx";
import { FcPrevious } from "react-icons/fc";
import YouMayAlsoLiked from "./YouMayAlsoLiked";
import Categories from "./Categories";

export default function ProductDetails({ data, handleClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [quantity, setQuantity] = useState(0);
  const selID = location.state;

  const productObj = data.find(({ id }) => id === selID);

  const {
    // id,
    goBack,
    image,
    // qty,
    prodName,
    prodInfo,
    price,
    features,
    inTheBox,
    displayImages,
  } = productObj;

  return (
    <div>
      <div id="productDetails">
        <div className="mainDiv">
          <button className="goBack" onClick={() => navigate(goBack)}>
            <pre>
              <FcPrevious />
            </pre>
            GO BACK
          </button>

          <div className="displayProd">
            <img src={image} alt="productImage" className="dpImg" />
            <div className="dpDetail">
              <div className="dItemDetails">
                <p className="newProd">new product</p>
                <h2 className="dpName">{prodName}</h2>
                <p className="dpInfo">{prodInfo}</p>
                <p className="dpPrice">$ {price}</p>

                <div className="addToCart">
                  <div className="quantity">
                    <button
                      className="decrememt"
                      onClick={() => {
                        quantity > 0 && setQuantity(quantity - 1);
                      }}
                    >
                      -
                    </button>
                    {quantity}
                    <button
                      className="increment"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="addBtn"
                    onClick={() => {
                      quantity > 0 && handleClick({ ...productObj, quantity });
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="description">
            <div className="desFeatures">
              <p className="title">FEATURES</p>
              <p className="detail">{features}</p>
            </div>

            <div className="inTheBox">
              <p className="title">IN THE BOX</p>
              {inTheBox.map(({ index, itm1, q1 }) => (
                <>
                  <p className="items" key={index}>
                    <span className="qty"> {q1}</span>{" "}
                    <span className="item">{itm1}</span>
                  </p>
                </>
              ))}
            </div>
          </div>
          <div className="displayImages">
            {displayImages.map(({ index, img, className }) => (
              <>
                <img
                  src={img}
                  key={index}
                  alt="productImg"
                  className={"di " + className}
                />
              </>
            ))}
          </div>
        </div>
      </div>
      <YouMayAlsoLiked />
      <Categories />
    </div>
  );
}
