import React from "react";
import HeadphoneList from "../components/HeadphoneList.jsx";
import Categories from "../components/Categories.jsx";
import "../css/headphone.css";

export default function Headphone() {
  return (
    <div id="headphones">
      <div className="mainTitle">
        <p>headphones</p>
      </div>
      <HeadphoneList />
      <Categories />
    </div>
  );
}
