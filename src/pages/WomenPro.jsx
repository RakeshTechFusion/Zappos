import React, { useState } from "react";
import { WomenCard } from "../components/WomenCard";
import {
  ProductTopdiv,
  ProductSortdiv,
  ProductContainer,
} from "../Styled/productStyled";
import "../Styled/singleProduct.css";
import tops from "../data/womenTops";
import { useNavigate } from "react-router-dom";

export const WomenPro = () => {
  const [high, setHigh] = useState(false);
  const [low, setLow] = useState(false);
  const [filterData, setfilterData] = useState(tops);

  const navigate = useNavigate();

  console.log(filterData);

  //    let dispatch=useDispatch();

  const handleChange = (e) => {
    let value = e.target.value;
    if (value === "under50") {
      let newData = tops.filter((elem) => elem.price < 50);
      setfilterData([...newData]);
      console.log(filterData);
    } else if (value === "under100") {
      let newData = tops.filter((elem) => elem.price < 100);
      setfilterData([...newData]);
      console.log(newData);
    } else if (value === "under200") {
      let newData = tops.filter((elem) => elem.price < 200);
      setfilterData([...newData]);
      console.log(newData);
    } else if (value === "above200") {
      let newData = tops.filter((elem) => elem.price >= 200);
      setfilterData([...newData]);
      console.log(newData);
    }

    console.log(e.target.value);
  };
  const handleSort = (e) => {
    if (e.target.value === "h2l") {
      let topdata = tops.sort((a, b) => {
        return b.price - a.price;
      });
      console.log(topdata, "Women's");
      setHigh(true);
    }
    if (e.target.value === "l2h") {
      let topdata = tops.sort((a, b) => {
        return a.price - b.price;
      });
      setLow(true);
      setHigh(false);
    }
  };

  const handleClick = (item) => {
    localStorage.setItem("singleProduct", JSON.stringify(item));

    navigate(`/products/women-tops/${item.id}`);
  };

  return (
    <>
      <div style={{ width: "auto", overflowX: "hidden" }}>
        <ProductTopdiv>
          <div>
            <h2>Women Shirt And Tees</h2>
            <p>{tops.length} items found</p>
          </div>
          <div>
            <ProductSortdiv>
              <h3>SortBy</h3>
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
                padding: "2%",
              }}
            >
              <div style={{ padding: "2%" }}>
                <h5>Price</h5>
                <hr />
                <div
                  style={{
                    lineHeight: "50px",
                    wordSpacing: "5px",
                    color: "#003953",
                    fontSize: "20px",
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
                <div
                  onClick={() => handleClick(item)}
                >
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
      </div>
    </>
  );
};
