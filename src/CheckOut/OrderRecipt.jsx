import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import styles from "./OrderRecipt.module.css";
import "./checkoutExtra.css";
import { useNavigate } from "react-router-dom";
export const OrderRecipt = (props) => {
  let cartArr2 = JSON.parse(localStorage.getItem("Cart"));
  let TotalPrice = cartArr2.reduce((acc, elem) => {
    return acc + Number(elem.price);
  }, 0);

  const [applyPromo, setApplyPromo] = useState(false);
  const handlePromo = (e) => {
    let promocode = document.getElementById("promoCode").value;
    if (promocode === "zappos10") {
      let UpTotalPrice = TotalPrice - TotalPrice * 0.1;
      TotalPrice = UpTotalPrice;
      console.log(TotalPrice);
    } else {
      console.log("Invalid Promo Code !");
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    alert("Order Placed Successfully");
    navigate("/");
  };

  return (
    <>
      <div className="promobox">
        <p style={{ fontSize: "40px" }}>
          Order Summary ( {cartArr2.length}{" "}
          {cartArr2.length === 1 ? "item" : "items"})
        </p>
        <div className={styles.miniCont}>
          <h3 style={{ fontSize: "25px" }}>Subtotal:</h3>
          <h3 style={{ fontSize: "25px" }}>$ {TotalPrice.toFixed(2)}</h3>
        </div>

        <div className={styles.miniCont}>
          <p style={{ fontSize: "25px" }}>Shipping:</p>
          <p style={{ fontSize: "25px" }}>Free</p>
        </div>
        <div className={styles.miniCont}>
          <p style={{ fontSize: "25px" }}>Total before tax:</p>
          <p style={{ fontSize: "25px" }}>$ {TotalPrice.toFixed(2)}</p>
        </div>

        <div className={styles.miniCont}>
          <p style={{ fontSize: "25px" }}>Total after tax:</p>
          <p style={{ fontSize: "25px" }}>$ {(TotalPrice * 1.1).toFixed(2)}</p>
        </div>
        <div className={styles.miniCont}>
          <p style={{ fontSize: "25px" }}>Estimated tax to be collected:</p>
          <p style={{ fontSize: "25px" }}>
            $ {(TotalPrice * (10 / 100)).toFixed(2)}
          </p>
        </div>
        <hr />
        <div className={styles.miniCont}>
          <h2 style={{ fontSize: "25px" }}>Order Total :</h2>
          <h2 style={{ fontSize: "25px" }}>$ {TotalPrice.toFixed(2)}</h2>
        </div>
      </div>

      <div className="promobox">
        <h2>Apply Gift Card or Promo Code</h2>
        <div className={styles.promoCodeDiv}>
          <input
            id="promoCode"
            type="text"
            style={{ height: "30px", width: "70%", fontSize: "larger" }}
            placeholder="Enter Code"
          />
          <button className="applyBtn" onClick={handlePromo}>
            APPLY
          </button>
        </div>

        <div>
          <button onClick={handleClick} className="placeOrderBtn">
            {" "}
            PLACE YOUR ORDER{" "}
          </button>
        </div>
      </div>
    </>
  );
};
