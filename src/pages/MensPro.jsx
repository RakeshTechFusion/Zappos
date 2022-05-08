import React, { useState } from "react";
import mensCloth from "../data/mensCloth";
import { WomenCard } from "../components/WomenCard";
import {
  ProductTopdiv,
  ProductSortdiv,
  ProductContainer,
} from "../Styled/productStyled";
import "../Styled/singleProduct.css";
import { useNavigate } from "react-router-dom";

export const MensPro = () => {
  const navigate = useNavigate();
  const [high, setHigh] = useState(false);
  const [low, setLow] = useState(false);
  const [filterData, setfilterData] = useState(mensCloth);

  const handleChange = (e) => {
    let value = e.target.value;
    if (value === "under50") {
      let newData = mensCloth.filter((elem) => elem.price < 50);
      setfilterData([...newData]);
      console.log(filterData);
    } else if (value === "under100") {
      let newData = mensCloth.filter((elem) => elem.price < 100);
      setfilterData([...newData]);
      console.log(newData);
    } else if (value === "under200") {
      let newData = mensCloth.filter((elem) => elem.price < 200);
      setfilterData([...newData]);
      console.log(newData);
    } else if (value === "above200") {
      let newData = mensCloth.filter((elem) => elem.price >= 200);
      setfilterData([...newData]);
      console.log(newData);
    }

    console.log(e.target.value);
  };

  const handleSort = (e) => {
    if (e.target.value === "h2l") {
      let mendata = mensCloth.sort((a, b) => {
        return b.price - a.price;
      });
      //  console.log(topdata,"Women's");
      setHigh(true);
    }
    if (e.target.value === "l2h") {
      let mendata = mensCloth.sort((a, b) => {
        return a.price - b.price;
      });
      setLow(true);
      setHigh(false);
      //  sorted_data(dispatch,topdata)
    }
  };

  const handleClick = (item) => {
    localStorage.setItem("singleProduct", JSON.stringify(item));

    navigate(`/products/men-tees/${item.id}`);
  };

  return (
    <>
      <ProductTopdiv>
        <div>
          <h2>Men's Shirts And Tees</h2>
          <p>{mensCloth.length} items found</p>
        </div>
        <div>
          <ProductSortdiv>
            <h5>SortBy</h5>
            <select
              style={{
                height: "50px",
                borderRadius: "10px",
                fontSize: "20px",
                lineHeight: "18px",
              }}
              onClick={handleSort}
            >
              <option value="rev">Relevance</option>
              <option value="h2l">High To Low</option>
              <option value="l2h">Low To High</option>
              <option value="rate">Costomer Ratings</option>
              <option value="new">New Arrival</option>
              <option value="brand">Brand Name</option>
            </select>
          </ProductSortdiv>
        </div>
      </ProductTopdiv>

      <ProductContainer>
        <div>
          <div
            style={{
              borderTop: "1px solid gray",
              borderBottom: "1px solid gray",
            }}
          >
            <div>
              <h5>Price</h5>
              <hr />
              <div
                style={{
                  // wordSpacing: "5px",
                  color: "#003953",
                }}
              >
                <div>
                  <input
                    style={{ marginLeft: "-50%" }}
                    type="radio"
                    value="under50"
                    name="filterprice"
                    onClick={handleChange}
                  />
                  <label htmlFor="under50">$50 and Under</label>
                </div>
                <div>
                  <input
                    style={{ marginLeft: "-50%" }}
                    type="radio"
                    value="under100"
                    name="filterprice"
                    onClick={handleChange}
                  />
                  <label htmlFor="under50">$100 and Under</label>
                </div>
                <div>
                  <input
                    style={{ marginLeft: "-50%" }}
                    type="radio"
                    value="under200"
                    name="filterprice"
                    onClick={handleChange}
                  />
                  <label htmlFor="under50">$200 and Under</label>
                </div>
                <div>
                  <input
                    style={{ marginLeft: "-50%" }}
                    type="radio"
                    value="above200"
                    name="filterprice"
                    onClick={handleChange}
                  />
                  <label htmlFor="under50">$200 and Over</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="topsdiv">
          {filterData.map((item) => {
            return (
              <div onClick={() => handleClick(item)}>
                <WomenCard
                  imageurl={item.imageurl}
                  brand={item.brand}
                  desc={item.desc}
                  ratings={item.ratings}
                  price={item.price}
                  key={item.id}
                />
              </div>
            );
          })}
        </div>
      </ProductContainer>
    </>
  );
};
