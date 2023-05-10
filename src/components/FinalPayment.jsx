import React from "react";
import "../css/finalPayment.css";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export default function FinalPayment({ cartItem, grandTotal }) {
  const navigate = useNavigate();

  return (
    <div id="finalPayment">
      <div className="finalP">
        <div className="tick">
          <TiTick size={30} />
        </div>
        <p className="thanks">THANK YOU FOR YOUR ORDER</p>

        <p className="mailInfo">
          You will recieve an email conformation shortly
        </p>

        
          <div className="iDiv">
          {cartItem.map(({ prodName, price, image, quantity }, index) => (
            <div className="itemDtl" key={index}>
              <img src={image} alt="" />
              <div className="iN">
                <p className="iName">{prodName}</p>
                <p className="iPrice">${price}</p>
              </div>
              <p className="qnty">x{quantity}</p>
            </div>))}

            <div className="gTotal">
              <p>GRAND TOTAL</p>
              <p className="gT">$ {grandTotal}</p>
            </div>
          </div>
        
        <button className="bTh" onClick={() => navigate("/")}>
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}
