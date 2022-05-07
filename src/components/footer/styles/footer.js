import styled from 'styled-components';

export const Container = styled.div`
  /* padding: 120px 40px; */
  background: #115470;
  row-gap:70px;
  border:"1px solid black";
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Box=styled.div`
    text-color:"white";
    border:"1px solid black";
    
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto 50px 50px;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 40px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
display: flex;
flex-direction:row;
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  display: flex;
  flex-direction:row;
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

