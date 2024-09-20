import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutUs from "./pages/about-us/AboutUs";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;
