import styled from "styled-components";

export const ProductTopdiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40% 20%;
  justify-content: space-between;
  height: 100px;
  margin: 0px 25px;
`;
export const ProductSortdiv = styled.div`
  display: grid;
  grid-template-columns: 20% 60%;
  margin: 20px auto;
  gap: 10px;
  padding: 18px;
`;

export const ProductContainer = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: 15% 80%;
  justify-content: space-around;
  gap: 10px;
  padding: 2%;
`;
export const OneCarddiv = styled.div`
  display: grid;
  grid-template-rows: 65% 20%;
  height: 450px;
  width: 300px;
  align-item: center;
  font-weight: 500;
  font-size: 13px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
