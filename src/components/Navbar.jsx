import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../css/navbar.css";
import {HiOutlineMenu} from "react-icons/hi"


export default function Navbar({
  cartItem,
  setCart,
  cart,
  removeAll,
  handleQuantity,
  total,
}) {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);


  return (
    <div id="main">
      <nav>
        
        <div className="nav">
          <div className="mobileMenu" onClick={()=> setMenu(!menu)}>
            <HiOutlineMenu size={30}/>
          </div>
          <div className="logo" onClick={() => navigate("/")}>
            <h1 style={{ fontFamily: `'PT Serif','serif'` }}>MuzicTown</h1>
          </div>

          <div className="list">
            <ul className="nav-list">
              <li className="home">
                <Link to="/" style={{ textDecoration: "none" }} >
                  <p>home</p>
                </Link>
              </li>
              <li className="headphones">
                <Link to="/headphones" style={{ textDecoration: "none" }} >
                  <p>headphones</p>
                </Link>
              </li>
              <li className="speakers">
                <Link to={"/speakers"} style={{ textDecoration: "none" }}>
                  <p>speakers</p>
                </Link>
              </li>
              <li className="earphones">
                <Link to={"/earphones"} style={{ textDecoration: "none" }}>
                  <p>earphones</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="cart">
            <span></span>
            <AiOutlineShoppingCart size={30} onClick={() => setCart(!cart)} />
            {!cart ? (
              ""
            ) : (
              <div className="highlight">
                <div className="cartBox">
                  <div className="cardhead">
                    <p className="cT">CART ({cartItem.length})</p>
                    <button onClick={() => removeAll()} className="removeAll">
                      Remove all
                    </button>
                  </div>
                  <div>
                    {cartItem.length > 0 ? (
                      <div className="cartMain">
                        {cartItem.map(
                          ({ prodName, image, price, quantity }, index) => (
                            <div className="addedItem" key={index}>
                              <img
                                className="cartItemImg"
                                src={image}
                                alt="item_img"
                              />
                              <div>
                                <p className="cartItemName">{prodName}</p>
                                <p className="cartItemPrice">$ {price}</p>
                              </div>
                              <div className="quantityCart">
                                <button
                                  className="dec"
                                  onClick={() => {
                                    quantity > 0 &&
                                      handleQuantity(false, cartItem[index]);
                                  }}
                                >
                                  -
                                </button>
                                {quantity}
                                <button
                                  className="inc"
                                  onClick={() =>
                                    handleQuantity(true, cartItem[index])
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          )
                        )}
                        <div className="cartTotal">
                          <p className="totalText">TOTAL</p>
                          <p className="totalPrice">$ {total}</p>
                        </div>
                        <button
                          className="seeProd checkoutBtn"
                          onClick={() => {
                            setCart(false);
                            navigate("product_details/checkout");
                          }}
                        >
                          CHECKOUT
                        </button>
                      </div>
                    ) : (
                      <p className="cMsg">
                        Your cart is currently empty! Why not shop around.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
        {
          menu && (
            <div className="mobileOptions">
        
            <div className="mobileList">
                  <ul className="nav-list">
                    <li className="home mOption">
                      <Link to="/" style={{ textDecoration: "none" }} onClick={()=> setMenu()}>
                        <p>home</p>
                      </Link>
                    </li>
                    <li className="headphones mOption">
                      <Link to="/headphones" style={{ textDecoration: "none" }} onClick={()=> setMenu()}>
                        <p>headphones</p>
                      </Link>
                    </li>
                    <li className="speakers mOption">
                      <Link to={"/speakers"} style={{ textDecoration: "none" }} onClick={()=> setMenu()}>
                        <p>speakers</p>
                      </Link>
                    </li>
                    <li className="earphones mOption">
                      <Link to={"/earphones"} style={{ textDecoration: "none" }} onClick={()=> setMenu("")}>
                        <p>earphones</p>
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
          )
        }
    </div>
  );
}
