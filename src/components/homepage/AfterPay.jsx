import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  height: 250px;
  width: 100%;
  margin-top: 50px;
  cursor: pointer;
`;

export const AfterPay = () => {
  return (
    <Parent>
      <img
        width={"100%"}
        src="https://m.media-amazon.com/images/G/01/zopus2020v/ZAfterpay/Afterpay_Banner_CTA_1440x250.jpg"
        alt=""
      />
    </Parent>
  );
};
