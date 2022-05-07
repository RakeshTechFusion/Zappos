import React from "react";
import { OneCarddiv } from "../styled";
import "./Product.css";

export const WomenCard = ({
  imageurl,
  brand,
  desc,
  ratings,
  price,
  cutoff_price,
}) => {
  return (
    <OneCarddiv>
      <div style={{ width: "250px", alignItems: "center" }}>
        <div className="ratingdiv">
          <span className="heart">♡</span>
          <spaan className="rate">({ratings})</spaan>
        </div>
        <img
          style={{ width: "50%", height: "70%", marginLeft: "25%" }}
          src={imageurl}
          alt={brand}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <h5>{brand}</h5>
        <p>{desc}</p>
        <p className="Price">
          <span className="price">${price}</span>
          <span className="strike">{cutoff_price}</span>
        </p>
        <div className="stardiv">
          <img
            src="https://www.kindmeal.my/images/icon_star.png"
            alt="broken"
          />

          <img
            src="https://www.kindmeal.my/images/icon_star.png"
            alt="broken"
          />

          <img
            src="https://www.kindmeal.my/images/icon_star.png"
            alt="broken"
          />

          <img
            src="https://www.kindmeal.my/images/icon_star.png"
            alt="broken"
          />

          <img
            src="https://www.kindmeal.my/images/icon_star.png"
            alt="broken"
          />
        </div>
      </div>
    </OneCarddiv>
  );
};
