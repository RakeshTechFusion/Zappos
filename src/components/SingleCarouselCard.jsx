import React from "react";
import styles from "../Styled/singlecarousel.module.css";
import { AiOutlineHeart } from "react-icons/ai";

export const SingleCarouselCard = (props) => {
  return (
    <div className={styles.parent}>
      <div>
        <img
          style={{ width: "80%", height: "150px", objectFit: "contain" }}
          src={props.img}
          alt=""
        />
      </div>
      <p className={styles.rating}>
        <AiOutlineHeart /> {props.ratings}
      </p>
      <p>{props.name}</p>
      <p className={styles.type}>{props.type}</p>
      <p className={styles.price}>${props.price}</p>
    </div>
  );
};
