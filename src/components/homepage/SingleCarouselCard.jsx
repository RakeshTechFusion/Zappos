import React from "react";
import styles from "../../Styled/homepage-style/singlecarousel.module.css";
import { AiOutlineHeart } from "react-icons/ai";

export const SingleCarouselCard = (props) => {
  return (
    <div className={styles.parent}>
      <div>
        <img
          style={{ width: "80%", height: "150px", objectFit: "contain" }}
          src={props.imageurl}
          alt=""
        />
      </div>
      <p className={styles.rating}>
        <AiOutlineHeart /> {props.ratings}
      </p>
      <p className={styles.name}>{props.brand}</p>
      <p className={styles.type}>{props.desc}</p>
      <p className={styles.price}>${props.price}</p>
    </div>
  );
};
