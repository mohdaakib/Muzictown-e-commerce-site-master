import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Headphone from "./pages/Headphone.jsx";
import Navbar from "./components/Navbar.jsx";
import Speaker from "./pages/Speaker.jsx";
import Earphone from "./pages/Earphone.jsx";
import ProductPage from "./pages/ProductPage";
import CheckOut from "./pages/CheckOut.jsx";
import { data } from "./data/productData.jsx";

function App() {
  
  const [cartItem, setCartItem] = useState([]);
  const [cart, setCart] = useState(false);
  const [total, setTotal] = useState(0);

  const handleClick = (data) => {
    console.log(
      cartItem.findIndex((value) => value.id === data.id),
      data
    );
    let itemIndex = cartItem.findIndex((value) => value.id === data.id);
    if (itemIndex >= 0) {
      alert("Item is already added to the cart!");
    } else {
      cartItem.push(data);
      setCartItem(cartItem);

      setTotal(total + data.price * data.quantity);
    }
  };

  const removeAll = () => {
    setCartItem([]);
    setTotal(0);
  };

  const handleQuantity = (increment, data) => {

    let itemIndex = cartItem.findIndex((value) => value.id === data.id);
    let item = cartItem[itemIndex];

    if (increment) {
      item.quantity = item.quantity + 1;
      setTotal(total + item.price);
    } else {
      item.quantity = item.quantity - 1;
      setTotal(total - item.price);
    }

    cartItem.splice(itemIndex, 1, item);
    setCartItem([...cartItem]);
    console.log("carte Item", cartItem);
  };

  return (
    <div>
      <Navbar
        cartItem={cartItem}
        setCartItem={setCartItem}
        cart={cart}
        setCart={setCart}
        removeAll={removeAll}
        handleQuantity={handleQuantity}
        total={total}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphone />} />
        <Route path="/speakers" element={<Speaker />} />
        <Route path="/earphones" element={<Earphone />} />
        <Route
          path="/product_details/:id"
          element={<ProductPage data={data} handleClick={handleClick} />}
        />
        <Route
          path="product_details/checkout"
          element={<CheckOut cartItem={cartItem} total={total} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
