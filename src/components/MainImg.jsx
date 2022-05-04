import React from "react";
import styled from "styled-components";

const ImgBox = styled.div`
  height: 600px;
  border: 1px solid black;
  background-image: url("https://m.media-amazon.com/images/G/01/2022/womens/WOMENS-DRESSES-SKIRTS-MAY-HERO-1440x700.jpg");
  background-size: contain;
  width: 100%;
  height: 650px;
  margin-bottom: 20px ;
`;
const OnImage = styled.div`
  height: 200px;
  padding: 24px;
  background: #fff;
  width: 30%;
  height: 35%;
  color: #000;
  margin: 16% 2%;
`;

const H1 = styled.h1`
  font-size: 24px;
`;

const P = styled.p`
  font-size: 18px;
`;

const Button = styled.button`
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  background-color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
    transition: all ease-in-out .3s;
  }
`;

export const MainImg = () => {
  return (
    <>
      <ImgBox>
        <OnImage>
          <H1>Dresses & Skirts: Spring Style Starts Here</H1>
          <P>
            Find whimsical fits, updated florals, pretty pastels, and electric
            hues!
          </P>
          <Button>SHOP DRESSES & SKIRTS</Button>
        </OnImage>
      </ImgBox>
    </>
  );
};
