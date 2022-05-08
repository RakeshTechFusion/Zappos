import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../Styled/homepage-style/dansko.module.css";
import { SingleCarouselCard } from "./SingleCarouselCard";

const data = [
  {
    id:1 ,
    imageurl: "https://m.media-amazon.com/images/I/61AnGbTHP7L._AC_UL320_.jpg",
    brand: "Dansko",
    desc: "LT Pro",
    ratings: "22,242",
    price: "$119.95",
  },
  {
    id:2 ,
    imageurl: "https://m.media-amazon.com/images/I/611+dT9IUOL._AC_UL320_.jpg",
    brand: "Dansko",
    ratings: "10,352",
    price: "$149.95",
    desc: "XP 2.0",
  },
  {
    id:3 ,
    imageurl: "https://m.media-amazon.com/images/I/81Att+yoRfL._AC_UL320_.jpg",
    brand: "Dansko",
    ratings: "698",
    price: "$139.95",
    desc: "Professional",
  },
  {
    id:4 ,
    imageurl: "https://m.media-amazon.com/images/I/61QCpf6F5TL._AC_UL320_.jpg",
    brand: "Dansko",
    ratings: "8",
    price: "$144.95",
    desc: "Kane",
  },
  {
    id:5 ,
    imageurl: "https://m.media-amazon.com/images/I/81l9nDv25fL._AC_UL320_.jpg",
    brand: "Dansko",
    ratings: "22,242",
    price: "$124.95",
    desc: "Sophie",
  },
  {
    id:6 ,
    imageurl: "https://m.media-amazon.com/images/I/61MmR1DVgxL._AC_UL320_.jpg",
    brand: "Dansko",
    ratings: "2,356",
    price: "$79.95",
    desc: "Season",
  },
  {
    id:7 ,
    imageurl: "https://m.media-amazon.com/images/I/61X6kNh+bOL._AC_UL320_.jpg",
    brand: "Dansko",
    ratings: "3,004",
    price: "$149.95",
    desc: "Reece",
  },
  {
    id:8 ,
    imageurl: "https://m.media-amazon.com/images/I/717YEr2xogL._AC_UL320_.jpg",
    brand: "Dansko",
    ratings: "10,352",
    price: "$144.95",
    desc: "Pace",
  },
];

export const DanskoShoes = () => {
  const navigate = useNavigate()
  const handleClick = (item) => {
    localStorage.setItem("singleProduct", JSON.stringify(item));
    navigate(`/products/dansko-shoes/${item.id}`);
  };

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
        {data.map((el, index) => {
          return (
            <SingleCarouselCard
              onClick={() => handleClick(el)}
              key={index}
              {...el}
            />
          );
        })}
      </div>
    </div>
  );
};
