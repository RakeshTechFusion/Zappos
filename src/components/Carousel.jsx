import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styled/carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { SingleCarouselCard } from "./SingleCarouselCard";

const popularItems = [
  {
    img: "https://m.media-amazon.com/images/I/816yoL1mI4L._AC_SX255_.jpg",
    name: "Crocs",
    price: "49.95",
    ratings: 3563,
    type: "Classic Clog",
  },
  {
    img: "https://m.media-amazon.com/images/I/81gSaz30MSL._AC_SX255_.jpg",
    name: "Crocs",
    price: "49.95",
    ratings: 2820,
    type: "Classic Clog",
  },
  {
    img: "https://m.media-amazon.com/images/I/61YmFwznaiL._AC_SX255_.jpg",
    name: "Crocs",
    price: "49.95",
    ratings: 1942,
    type: "Classic Clog",
  },
  {
    img: "https://m.media-amazon.com/images/I/81NKoInBS7L._AC_SX255_.jpg",
    name: "Crocs",
    price: "59.95",
    ratings: 3751,
    type: "Classic Lined Clog",
  },
  {
    img: "https://m.media-amazon.com/images/I/61TeInTmpvL._AC_SX255_.jpg",
    name: "Crocs",
    price: "35.00",
    ratings: 815,
    type: "Classic Tie-Dye Graphic..",
  },
  {
    img: "https://m.media-amazon.com/images/I/51d8uWPVVRL._AC_SX255_.jpg",
    name: "adidas Originals",
    price: "63.00",
    ratings: 230,
    type: "Swift Run W",
  },
  {
    img: "https://m.media-amazon.com/images/I/716nxTFtrtL._AC_SX255_.jpg",
    name: "Under Armour",
    price: "20.00",
    ratings: 75,
    type: "Essential 2.0 No Show...",
  },
  {
    img: "https://m.media-amazon.com/images/I/51l1Jec3koL._AC_SX255_.jpg",
    name: "Under Armour Kids",
    price: "30.00",
    ratings: 5,
    type: "Performance Polo",
  },
  {
    img: "https://m.media-amazon.com/images/I/718fPrLmdGL._AC_SX255_.jpg",
    name: "Clarks",
    price: "38.34",
    ratings: 198,
    type: "Fenner Nerice",
  },
  {
    img: "https://m.media-amazon.com/images/I/611oCjO5-iL._AC_SX255_.jpg",
    name: "Crocs",
    price: "59.95",
    ratings:1602 ,
    type: "Classic Lined Clog",
  },
  {
    img: "https://m.media-amazon.com/images/I/51mE7HTNrwL._AC_SX255_.jpg",
    name: "Under Armour Kids",
    price: "30.00",
    ratings:11 ,
    type: "Performance Polo",
  },
  {
    img: "https://m.media-amazon.com/images/I/81kT4mVjONL._AC_SX255_.jpg",
    name: "Carhartt",
    price: "24.99",
    ratings:106 ,
    type: "Deluxe Lunch Cooler",
  },
  {
    img: "https://m.media-amazon.com/images/I/7170XZI3LOL._AC_SX255_.jpg",
    name: "Hanes",
    price: "27.76",
    ratings:5 ,
    type: "Women's Jogger with Pock..",
  },
  {
    img: "https://m.media-amazon.com/images/I/81a1VNoVB-L._AC_SX255_.jpg",
    name: "Bali",
    price: "29.99",
    ratings:57 ,
    type: "Comfort Flex Fit Wireless..",
  },
  {
    img: "https://m.media-amazon.com/images/I/71I6eNeKHrS._AC_SX255_.jpg",
    name: "adidas Originals",
    price: "29.95",
    ratings:27 ,
    type: "Trefoil Tee",
  },
];

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowBackIos />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );
};

export const Carousels = () => {
  return (
    <div className="carousel">
      <h1>Popular Items</h1>
      <Slider
        dots
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        slidesToShow={6}
        slidesToScroll={6}
        infinite={false}
      >
        {popularItems.map((el, index) => {
          return <SingleCarouselCard key={index} {...el} />;
        })}
      </Slider>
    </div>
  );
};
