import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data/productData.jsx";
import "../css/youMayAlsoLiked.css";

export default function YouMayAlsoLiked() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };

  // let newItem1 = data[Math.floor(Math.random() * data.length)];
  // let newItem2 = data[Math.floor(Math.random() * data.length)];
  // let newItem3 = data[Math.floor(Math.random() * data.length)];

  let newItem1 = data[1];
  let newItem2 = data[3];
  let newItem3 = data[5];
  var newArr = [];

  newArr.push(newItem1, newItem2, newItem3);

  return (
    <div id="youMayAsloLiked">
      <h1 className="ymalTitle">YOU MAY ALSO LIKE</h1>
      <div className="randomItems">
        {newArr.map(({ id, prodName, image }) => (
          <div key={id} className="itemBox">
            <img className="itemImg" src={image} alt="imageItem" />
            <h3 className="itemN">{prodName}</h3>
            <Link
              to={`/product_details/${prodName}`}
              state={id}
              onClick={scrollToTop}
            >
              <button className="seeProd itemBtn">SEE PRODUCT</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
