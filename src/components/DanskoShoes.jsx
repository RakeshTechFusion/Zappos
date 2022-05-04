import React from "react";
import styles from "../Styled/dansko.module.css";
import { SingleCarouselCard } from "./SingleCarouselCard";

const data = [
  {
    img: "https://m.media-amazon.com/images/I/61AnGbTHP7L._AC_UL320_.jpg",
    name: "Dansko",
    type: "LT Pro",
    ratings: "22,242",
    price: "$119.95",
  },
  {
    img: "https://m.media-amazon.com/images/I/611+dT9IUOL._AC_UL320_.jpg",
    name: "Dansko",
    ratings: "10,352",
    price: "$149.95",
    type: "XP 2.0",
  },
  {
    img: "https://m.media-amazon.com/images/I/81Att+yoRfL._AC_UL320_.jpg",
    name: "Dansko",
    ratings: "698",
    price: "$139.95",
    type: "Professional",
  },
  {
    img: "https://m.media-amazon.com/images/I/61QCpf6F5TL._AC_UL320_.jpg",
    name: "Dansko",
    ratings: "8",
    price: "$144.95",
    type: "Kane",
  },
  {
    img: "https://m.media-amazon.com/images/I/81l9nDv25fL._AC_UL320_.jpg",
    name: "Dansko",
    ratings: "22,242",
    price: "$124.95",
    type: "Sophie",
  },
  {
    img: "https://m.media-amazon.com/images/I/61MmR1DVgxL._AC_UL320_.jpg",
    name: "Dansko",
    ratings: "2,356",
    price: "$79.95",
    type: "Season",
  },
  {
    img: "https://m.media-amazon.com/images/I/61X6kNh+bOL._AC_UL320_.jpg",
    name: "Dansko",
    ratings: "3,004",
    price: "$149.95",
    type: "Reece",
  },
  {
    img: "https://m.media-amazon.com/images/I/717YEr2xogL._AC_UL320_.jpg",
    name: "Dansko",
    ratings: "10,352",
    price: "$144.95",
    type: "Pace",
  },
];

export const DanskoShoes = () => {
  return (
    <div className={styles.dansko}>
      <div>
        <div>
          <h1>Dansko: On-Trend Comfort for Work & Beyond</h1>
          <button>SHOP DANSKO</button>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/G/01/2022/homepage5.02/LT_Pro_hero_500x740.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        {/* <SingleCarouselCard data={data} /> */}
        {data.map((el, index) => {
          return <SingleCarouselCard key={index} {...el} />;
        })}
      </div>
    </div>
  );
};
