import "./style/theme.css";
import "./style/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { useState } from "react";

export default function App() {
  
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    //React Fragment
    <>
      <Header cart={cart} />
      <ProductList addToCart={addToCart} />
    </>
  );
}