import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import "./styles/App.css";

export default function App() {
  return (
    &lt;CartProvider&gt;
      &lt;BrowserRouter&gt;
        &lt;Navbar /&gt;
        &lt;main className="main-content"&gt;
          &lt;Routes&gt;
            &lt;Route path="/"         element={&lt;Home     /&gt;} /&gt;
            &lt;Route path="/shop"     element={&lt;Shop     /&gt;} /&gt;
            &lt;Route path="/cart"     element={&lt;CartPage /&gt;} /&gt;
            &lt;Route path="/checkout" element={&lt;Checkout /&gt;} /&gt;
          &lt;/Routes&gt;
        &lt;/main&gt;
      &lt;/BrowserRouter&gt;
    &lt;/CartProvider&gt;
  );
}