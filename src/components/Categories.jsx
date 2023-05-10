import React from "react";
import { Link } from "react-router-dom";
import "../css/categories.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import headphoneImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphoneImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

const linkstyle = {
  color: "black",
  textDecoration: "none",
};

const data = [
  {
    id: 1,
    name: "headphones",
    image: headphoneImg,
    link: "/headphones",
  },
  {
    id: 2,
    name: "speakers",
    image: speakerImg,
    link: "/speakers",
  },
  {
    id: 3,
    name: "earphones",
    image: earphoneImg,
    link: "/earphones",
  },
];

export default function Categories() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };
  return (
    <div>
      <div id="categories">
        {data.map(({ id, image, name, link }) => (
          <div className="category">
            <div key={id}>
              <img className="pImg" src={image} alt="productImage" />
            </div>
            <p className="pName">{name}</p>
            <Link style={linkstyle} to={link} onClick={scrollToTop}>
              {" "}
              <p className="shop">
                shop
                <MdOutlineKeyboardArrowRight
                  size={20}
                  style={{ color: "coral" }}
                />
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
