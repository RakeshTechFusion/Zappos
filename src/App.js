import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/CheckOut/Checkout";
import { Navbar } from "./components/Navbar";
import { Product } from "./product/Product";


function App() {
  const [cartToggle,setCartToggle]=useState(false);

  
  return <div>
    
    <Navbar cartToggle={cartToggle} setCartToggle={setCartToggle}/>
    <Cart cartToggle={cartToggle} setCartToggle={setCartToggle}/>
    {/* <Product cartToggle={cartToggle} setCartToggle={setCartToggle}/> */}
 
  <Routes>
    <Route path="/checkout" element={<Checkout/>} />    
  </Routes>

  </div>;
}

export default App;
