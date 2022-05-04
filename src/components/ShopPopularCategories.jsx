import React from "react";
import styles from "../Styled/shopPopular.module.css";

const data = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/614vcxz1sCL._AC_SX255_.jpg",
    name: "Sneakers & Athletic Shoes",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/61lDBv3S0oL._AC_SX255_.jpg",
    name: "Flat Sandals",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/71u0qDadJEL._AC_SX255_.jpg",
    name: "Dresses",
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/71Sv8FHil+L._AC_SX255_.jpg",
    name: "Heeled Sandals",
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/81flGLWN9YL._AC_SX255_.jpg",
    name: "Swimwear",
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/71gYrY5KThL._AC_SX255_.jpg",
    name: "Clogs",
  },
];

export const ShopPopularCategories = () => {
  return (
    <div className={styles.popCate}>
    <h1>Shop Popular Categories</h1>
      <div className={styles.flexBox}>
        {data.map((el) => {
          return (
            <>
              <div className={styles.flexChild} key={el.id}>
                {el.id == 3 || el.id == 5 ? (
                  <img className={styles.longImg} src={el.img} alt="" />
                ) : (
                  <img className={styles.shortImg} src={el.img} alt="" />
                )}
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.flexBox}>
        {data.map((el) => {
          return (
            <>
              <div className={styles.flexChild} key={el.id}>
                <p>{el.name}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
