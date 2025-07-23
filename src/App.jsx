import "./style/theme.css";
import "./style/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { useState } from "react";
import { Route, Routes } from "react-router";
import { Cart } from "./components/Cart";

export default function App() {
  
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === product.id);
      if (found) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function increaseQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    //React Fragment
    <>
      <Header cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              addToCart={addToCart}
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onClearCart={clearCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
      </Routes>
    </>
  );
}