import React, { useState } from "react";
import "../css/checkout.css";
import FinalPayment from "../components/FinalPayment.jsx";
// import { FcPrevious } from "react-icons/fc";

export default function CheckOut({ cartItem, total }) {
  const [emoney, setEmoney] = useState(false);
  const [pay, setPay] = useState(false);
  let shipping = 50 * cartItem.length;
  let vat = 120 * cartItem.length;
  var grandTotal = vat + shipping + total;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {pay && <FinalPayment grandTotal={grandTotal} cartItem={cartItem} />}
      <div id="checkout">
        <div className="checkout">
          <p className="title">CHECKOUT</p>
          <div className="billing">
            <p className="mTitle">BILLING DETAILS</p>
            <div className="billingDetails">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="name"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="eamail"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="Phone">Phone</label>
                <input
                  type="tel"
                  className="number"
                  id=""
                  placeholder="Enter your phone"
                />
              </div>
            </div>
          </div>
          <div className="shippingInfo">
            <p className="mTitle">SHIPPING INFO</p>
            <div className="shipping">
              <div className="s1">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="address"
                  placeholder="Enter your address"
                />
              </div>
              <div className="s2">
                <label htmlFor="postcode">Postcode</label>
                <input
                  type="text"
                  className="postcode"
                  placeholder="Enter your postcode"
                />
              </div>
              <div className="s3">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="city"
                  placeholder="Enter your city"
                />
              </div>
              <div className="s4">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  className="country"
                  placeholder="Enter your country"
                />
              </div>
            </div>
          </div>

          <div className="payment">
            <p className="mTitle">PAYMENT DETAILS</p>
            <div className="payMode">
              <div className="emoney">
                <input
                  type="radio"
                  id="emoney"
                  name="payment"
                  onChange={() => setEmoney(!emoney)}
                  value={"eMoney"}
                />
                <label for="emoney">e-Money</label>
              </div>

              <div className="cash">
                <input
                  type="radio"
                  id="cash"
                  onChange={() => setEmoney("")}
                  name="payment"
                  value={"cash"}
                />
                <label for="cash">Cash</label>
              </div>
            </div>

            {emoney ? (
              <div className="emoneyDetails">
                <div>
                  <label htmlFor="eMoneyNumber">e-Money Number</label>
                  <input
                    type="text"
                    className="eMoneyNumber"
                    placeholder="Enter your e-money pin"
                  />
                </div>
                <div>
                  <label htmlFor="eMoneyPIN">e-Money PIN</label>
                  <input
                    type="text"
                    className="eMoneyPIN"
                    placeholder="Enter your e-Money PIN"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="summary">
          <p className="title">SUMMARY</p>

          <div className="sDetails">
            {cartItem.map(({ image, prodName, price, quantity }, index) => (
              <div className="item">
                <img className="cartImg" src={image} alt="pImage" />
                <div className="itemDetail">
                  <p className="itemName">{prodName}</p>

                  <p className="itemPrice">{price}</p>
                </div>
                <p className="itemQ">x{quantity}</p>
              </div>
            ))}

            <div className="total">
              <p>TOTAL</p>
              <p className="price">{total}</p>
            </div>
            <div className="shipping2">
              <p>SHIPPING</p>
              <p className="price">$ {shipping}</p>
            </div>
            <div className="vat">
              <p>VAT (INCLUDED)</p>
              <p className="price">$ {vat}</p>
            </div>
            <div className="grandTotal">
              <p>GRAND TOTAL</p>
              <p className="price">$ {grandTotal}</p>
            </div>
            <button
              className="pay seeProd"
              type="submit"
              onClick={() => {
                setPay(!pay);
                scrollToTop();
              }}
            >
              COUNTINUE & PAY
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
