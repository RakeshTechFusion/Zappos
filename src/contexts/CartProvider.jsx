import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [CartData, setCartData] = useState([]);

  const addToCart = (data) => {
    setCartData([...CartData, data]);
  };

  const removeFromCart = (id) => {
    let newData = CartData.filter((el) => {
      return el.id != id;
    });
    setCartData(newData);
  };

  const value = { CartData, setCartData, addToCart, removeFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
