import { useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import { Navbar } from "./components/Navbar";



function App() {
  const [cartToggle,setCartToggle]=useState(false);

  
  return <div>
    
    <Navbar cartToggle={cartToggle} setCartToggle={setCartToggle}/>
    <Cart cartToggle={cartToggle} setCartToggle={setCartToggle}/>
 

  </div>;
}

export default App;
