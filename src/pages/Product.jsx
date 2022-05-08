import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../Styled/product.module.css";

// const data = {
//   name: "Crocs",
//   type: "Classic Clog",
//   price: "49",
//   img: "https://m.media-amazon.com/images/I/816yoL1mI4L._AC_SR920,736_.jpg",
//   ratings: "30,516",
// };

export const Product = ({ setCartToggle }) => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  // console.log(id);
  let data = JSON.parse(localStorage.getItem("singleProduct")) ;

  let CartData = JSON.parse(localStorage.getItem("Cart")) || [];

  const AddtoCart = () => {
    CartData.push(data);
    localStorage.setItem("Cart", JSON.stringify(CartData));
    setCartToggle(true);
  };
  return (
    <div className={styles.parent}>
      <div>
        <img src={data.imageurl} alt="" />
      </div>
      <div>
        <h1>{data.brand}</h1>
        <h2>{data.desc}</h2>
        <div className={styles.priceFlex}>
          $<p>{data.price}</p>95
        </div>
        <div>
          <button className={styles.shippingBtn}>
            <img
              src="https://www.zappos.com/marty-assets/shipping-box.dfa1add9e27522acc3ee5d8e061339a9.svg"
              alt=""
            />
            SHIPS FREE
          </button>
          ⭐⭐⭐⭐⭐ <span className={styles.ratingSpan}>({data.ratings})</span>
        </div>
        <button onClick={AddtoCart} className={styles.cartBtn}>
          Add To Cart
        </button>
        <div className={styles.lastBox}>
          <strong>FREE</strong> upgraded shipping & returns with
        </div>
        <img
          width={"20%"}
          src="https://www.zappos.com/marty-assets/amazon-prime.2821774c351a0e9079f230ad4b312a71.svg"
          alt=""
        />
      </div>
    </div>
  );
};
