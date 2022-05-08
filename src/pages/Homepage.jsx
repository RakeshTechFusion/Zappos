import React from "react";
import { MainImg } from "../components/homepage/MainImg";
import { ShopPopularCategories } from "../components/homepage/ShopPopularCategories";
import { WomensDeal } from "../components/homepage/WomensDeal";
import { NewArrival } from "../components/homepage/NewArrival";
import { Carousels } from "../components/homepage/Carousel";
import { DanskoShoes } from "../components/homepage/DanskoShoes";
import { AfterPay } from "../components/homepage/AfterPay";

const womenData = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/G/01/2022/homepage5.02/BROADCAST-SHOES-FASHION-SANDALS-MAY-TRIPTYCH-500X500.jpg",
    title: "Fashion Sandals + Dopamine Dressing",
    desc: "Rev up your look with playful hues, fun block heels, and ruching details",
    link: "SHOP WOMEN'S FASHION SANDALS",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/G/01/2022/homepage5.02/BROADCAST-CLOTHING-TOTES-SHE-WILL-LOVE-MAY-TRIPTYCH-500X500.jpg",
    title: "Giftable Totes from Top Brands",
    desc: "Find styles she'll love from Tory Burch, COACH, Marc Jacobs and more!",
    link: "SHOP TOTES FOR HER",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/G/01/2022/homepage5.02/BROADCAST-CLOGS-MULES-MAY-TRIPTYCH-500X500.jpg",
    title: "Clogs & Mules: Made for Everyday Style",
    desc: "Discover  wear-all-day faves from Madewell, Sam Edelman, and more!",
    link: "SHOP WOMEN'S CLOGS & MULES",
  },
];

const beforeFooter = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/Zappos_ONE_Retina.png",
    title: "Diversity Equity & Inclusion",
    desc: "At Zappos, diversity and individuality are central to our core values",
    link: "LEARN MORE ABOUT ZAPPOS ONE PORPOSE",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/G/01/2022/homepage2.08/Blank_500_x_500-491.jpg",
    title: "Zappos for Good",
    desc: "Learn how to easily donate or recycle your secondhand items",
    link: "EXPLORE ZAPPOS FOR GOOD",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/G/01/zappos/landing/opus/2020/homepage/july/GGPromo.png",
    title: "Goods for Good",
    desc: "We're highlighting brands who are making a difference and helping build a better place for us all",
    link: "SHOP GOODS FOR GOOD",
  },
];

export const Homepage = () => {
  return (
    <div>
      <MainImg />
      <ShopPopularCategories />
      <WomensDeal key={womenData.id} data={womenData} />
      <NewArrival />
      <Carousels />
      <DanskoShoes />
      <AfterPay />
      <WomensDeal key={beforeFooter.id} data={beforeFooter} />
    </div>
  );
};
