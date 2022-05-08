import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styled/homepage-style/carousel.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { SingleCarouselCard } from "./SingleCarouselCard";

const popularItems = [
  {
    imageurl: "https://m.media-amazon.com/images/I/816yoL1mI4L._AC_SX255_.jpg",
    brand: "Crocs",
    price: "49.95",
    ratings: 3563,
    desc: "Classic Clog",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/81gSaz30MSL._AC_SX255_.jpg",
    brand: "Crocs",
    price: "49.95",
    ratings: 2820,
    desc: "Classic Clog",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/61YmFwznaiL._AC_SX255_.jpg",
    brand: "Crocs",
    price: "49.95",
    ratings: 1942,
    desc: "Classic Clog",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/81NKoInBS7L._AC_SX255_.jpg",
    brand: "Crocs",
    price: "59.95",
    ratings: 3751,
    desc: "Classic Lined Clog",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/61TeInTmpvL._AC_SX255_.jpg",
    brand: "Crocs",
    price: "35.00",
    ratings: 815,
    desc: "Classic Tie-Dye Graphic..",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/51d8uWPVVRL._AC_SX255_.jpg",
    brand: "adidas Originals",
    price: "63.00",
    ratings: 230,
    desc: "Swift Run W",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/716nxTFtrtL._AC_SX255_.jpg",
    brand: "Under Armour",
    price: "20.00",
    ratings: 75,
    desc: "Essential 2.0 No Show...",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/51l1Jec3koL._AC_SX255_.jpg",
    brand: "Under Armour Kids",
    price: "30.00",
    ratings: 5,
    desc: "Performance Polo",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/718fPrLmdGL._AC_SX255_.jpg",
    brand: "Clarks",
    price: "38.34",
    ratings: 198,
    desc: "Fenner Nerice",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/611oCjO5-iL._AC_SX255_.jpg",
    brand: "Crocs",
    price: "59.95",
    ratings:1602 ,
    desc: "Classic Lined Clog",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/51mE7HTNrwL._AC_SX255_.jpg",
    brand: "Under Armour Kids",
    price: "30.00",
    ratings:11 ,
    desc: "Performance Polo",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/81kT4mVjONL._AC_SX255_.jpg",
    brand: "Carhartt",
    price: "24.99",
    ratings:106 ,
    desc: "Deluxe Lunch Cooler",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/7170XZI3LOL._AC_SX255_.jpg",
    brand: "Hanes",
    price: "27.76",
    ratings:5 ,
    desc: "Women's Jogger with Pock..",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/81a1VNoVB-L._AC_SX255_.jpg",
    brand: "Bali",
    price: "29.99",
    ratings:57 ,
    desc: "Comfort Flex Fit Wireless..",
  },
  {
    imageurl: "https://m.media-amazon.com/images/I/71I6eNeKHrS._AC_SX255_.jpg",
    brand: "adidas Originals",
    price: "29.95",
    ratings:27 ,
    desc: "Trefoil Tee",
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
