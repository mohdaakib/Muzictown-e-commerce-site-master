import React from "react";
import { Link } from "react-router-dom";
import "../css/moreProducts.css";
import zx9 from "../assets/home/desktop/image-speaker-zx9.png";
import yx1 from "../assets/home/desktop/image-earphones-yx1.jpg";

export default function MoreProducts() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };

  return (
    <div id="moreProducts">
      <div className="mp1">
        <div className="prod1">
          <div className="prod1Img">
            <img src={zx9} alt="prodImg" />
          </div>
          <div className="prod1Detail">
            <p className="prod1Name">ZX9 SPEAKER</p>
            <p className="prod1Info">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              to={`/product_details/ZX9%20SPEAKER`}
              state={4}
              onClick={scrollToTop}
            >
              {" "}
              <button className="seeProd seeProd1"> see Product</button>
            </Link>
          </div>
        </div>
        <div className="prod2">
          <div className="prod2Detail">
            <p className="prod2Name">ZX7 SPEAKER</p>
            <Link
              to={`/product_details/ZX7%20SPEAKER`}
              state={5}
              onClick={scrollToTop}
            >
              {" "}
              <button className="seeProd seeProd2"> see Product</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="prod3">
        <img className="prod3Img" src={yx1} alt="prodImg" />

        <div className="prod3Detail">
          <p className="prod3Name">YX1 WIRELESS EARPHONES</p>
          <Link
            to="/product_details/YX1%20WIRELESS%20EARPHONES"
            state={6}
            onClick={scrollToTop}
          >
            {" "}
            <button className="seeProd seeProd2">see Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
