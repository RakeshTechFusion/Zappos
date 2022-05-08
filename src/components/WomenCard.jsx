import React from "react";
import { OneCarddiv } from "../Styled/productStyled";
import { useNavigate, useParams } from "react-router-dom";
import "../Styled/singleProduct.css";

export const WomenCard = ({
  imageurl,
  brand,
  desc,
  ratings,
  price,
  cutoff_price,
}) => {
  // const  {id}  = useParams();
  // const navigate = useNavigate();
  return (
    <OneCarddiv>
      <div style={{ width: "250px", alignItems: "center" }}>
        <div className="ratingdiv">
          <span className="heart">♡</span>
          <span className="rate">({ratings})</span>
        </div>
        <img
          style={{ width: "50%", height: "70%", marginLeft: "25%" }}
          src={imageurl}
          alt={brand}
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <h5>{brand}</h5>
        <p style={{fontSize:"14px"}}>{desc}</p>
        <p style={{fontSize:"20px"}} className="Price">
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
