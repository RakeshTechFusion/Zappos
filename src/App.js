import { useState } from "react";
import { Homepage } from "./pages/Homepage";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/cart/Cart";
import { MensPro } from "./pages/MensPro";
import { WomenPro } from "./pages/WomenPro";
import { SneakerPro } from "./pages/SneakerPro";
import { WomenSneak } from "./pages/WomenSneak";
import { Product } from "./pages/Product";
import { Checkout } from "./CheckOut/Checkout";
import CreateAcc from "./pages/CreateAcc";
import { Footer } from "./components/Footer";

function App() {
  const [cartToggle, setCartToggle] = useState(false);
  return (
    <div className="App">
      <Navbar cartToggle={cartToggle} setCartToggle={setCartToggle} />
      <Cart cartToggle={cartToggle} setCartToggle={setCartToggle} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-account" element={<CreateAcc />} />
        <Route path="/products/men-tees/*" element={<MensPro />} />
        <Route
          path="/products/men-tees/:id"
          element={
            <Product cartToggle={cartToggle} setCartToggle={setCartToggle} />
          }
        />
        <Route path="/products/women-tops/*" element={<WomenPro />} />
        \
        <Route
          path="/products/women-tops/:id"
          element={
            <Product cartToggle={cartToggle} setCartToggle={setCartToggle} />
          }
        />
        <Route path="/products/men-sneakers/*" element={<SneakerPro />} />
        <Route
          path="/products/men-sneakers/:id"
          element={
            <Product cartToggle={cartToggle} setCartToggle={setCartToggle} />
          }
        />
        <Route path="/products/women-sneakers/*" element={<WomenSneak />} />
        <Route
          path="/products/women-sneakers/:id"
          element={
            <Product cartToggle={cartToggle} setCartToggle={setCartToggle} />
          }
        />
        <Route
          path="/products/dansko-shoes/:id"
          element={
            <Product cartToggle={cartToggle} setCartToggle={setCartToggle} />
          }
        />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
