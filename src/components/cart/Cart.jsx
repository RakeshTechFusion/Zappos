import React, { useContext, useEffect, useRef, useState } from "react";
import {
  RemoveButton,
  CartSidebar,
  EmptyImage,
  EmptyCart,
  SidbarHeading,
  EmptyCartLink,
  CheckoutButtonDiv,
  CheckoutButton1,
  CheckoutButton2,
} from "../../Styled/cartSyled";
import closeCart from "./closeCart";
import { CartProduct } from "./CartProduct";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartProvider";

export const Cart = ({ cartToggle, setCartToggle }) => {
  const navigate = useNavigate();

  // let Data = JSON.parse(localStorage.getItem("Cart")) || [];

  const {CartData , setCartData , removeFromCart} = useContext(CartContext);

  // const [CartData, setCartData] = useState([]);

  // useEffect(() => {
    
  //   setCartData(Data);
  // }, []);

  let TotalPrice = CartData.reduce((acc, elem) => {
    return acc + Number(elem.price);
  }, 0);

  const $sideBarRef = useRef();
  closeCart($sideBarRef, () => setCartToggle(false));
  const handleCheckout = (TotalPrice) => {
    setCartToggle(false);
    return navigate("/checkout");
  };

  const Removeitem = (id) => {
    // let newData = CartData.filter((el) => {
    //   return el.id != id;
    // });
    // setCartData(newData)
    // localStorage.setItem("Cart", JSON.stringify(newData));
    removeFromCart(id) ;
  };

  return (
    <CartSidebar ref={$sideBarRef} className={cartToggle ? "expand" : "shrink"}>
      <SidbarHeading>
        <h2>My Cart</h2>
        <h2 onClick={() => setCartToggle(false)} className="closeCross">
          X
        </h2>
      </SidbarHeading>
      <hr />

      {CartData.length === 0 ? (
        <div
          style={{
            marginTop: "auto",
            position: "relative",
            paddingRight: "25px",
            height: "70vh",
          }}
        >
          <p style={{ color: "rgb(88,88,88)", fontSize: "14px" }}>
            Nothing to see here yet! Sign in to see items that you've previously
            placed in your Cart or check out all the awesome things you can buy
            on Zappos.com!
          </p>
          <EmptyCart>
            <EmptyCartLink to="/sign-in">Sign In</EmptyCartLink>
            <EmptyCartLink to="/">Home Page</EmptyCartLink>
            <EmptyCartLink to="/brands">Brand List</EmptyCartLink>
            <EmptyCartLink to="/contactus">Contact Us</EmptyCartLink>
          </EmptyCart>
          <EmptyImage>
            <img
              className="emptyCartImage"
              src="https://www.zappos.com/marty-assets/empty-cart.aa012412a3668eb7151b6731c716a428.svg"
              alt="image1"
            />
            <br />
            <button>Sign In</button>
          </EmptyImage>
        </div>
      ) : (
        <div>
          <div
            style={{
              marginTop: "auto",
              position: "relative",
              overflowY: "scroll",
              paddingRight: "25px",
              height: "70vh",
            }}
          >
            {CartData.map((elem, index) => {
              return (
                <div>
                  <CartProduct cartData={elem} />
                  <RemoveButton
                    className="removebutton"
                    onClick={() => Removeitem(elem.id)}
                  >
                    REMOVE
                  </RemoveButton>{" "}
                  <hr />
                </div>
              );
            })}
          </div>

          <CheckoutButtonDiv>
            <p
              style={{ lineHeight: "2px", fontSize: "15px", marginLeft: "20%" }}
            >
              Cart Subtotal ({CartData.length}{" "}
              {CartData.length === 1 ? "item" : "items"}) $ {TotalPrice}.00
            </p>
            <CheckoutButton1> VIEW CART</CheckoutButton1>
            <CheckoutButton2 onClick={() => handleCheckout(TotalPrice)}>
              {" "}
              PROCEED TO CHECKOUT
            </CheckoutButton2>
          </CheckoutButtonDiv>
        </div>
      )}

      {/* Empty Cart Matter start*/}

      {/* Empty Cart Matter end*/}
    </CartSidebar>
  );
};
