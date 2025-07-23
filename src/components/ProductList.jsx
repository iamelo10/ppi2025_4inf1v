import React, { useEffect, useState } from "react";
import style from "./ProductList.module.css";
import { CircularProgress } from "@mui/material";
import { Product } from "./Product";

export function ProductList({ addToCart, cart, increaseQuantity, decreaseQuantity }) {
  var category = "smartphones";
  var limit = 10;
  var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.productList}>
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          return (
            <div key={product.id} style={{ border: "1px solid #eee", padding: "1rem", marginBottom: "1rem", borderRadius: "1rem", display: "flex", alignItems: "center", gap: "2rem" }}>
              <img src={product.thumbnail} alt={product.title} style={{ width: "80px", borderRadius: "1rem" }} />
              <div style={{ flex: 1 }}>
                <h3>{product.title}</h3>
                <p>Preço: R$ {product.price.toFixed(2)}</p>
              </div>
              <div>
                {cartItem ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <button onClick={() => decreaseQuantity(product.id)} style={{ padding: "0.5rem 1rem", borderRadius: "1rem", background: "#A44200", color: "#fff", border: "none", cursor: "pointer" }}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => increaseQuantity(product.id)} style={{ padding: "0.5rem 1rem", borderRadius: "1rem", background: "#4F5D2F", color: "#fff", border: "none", cursor: "pointer" }}>+</button>
                  </div>
                ) : (
                  <button onClick={() => addToCart(product)} style={{ padding: "0.5rem 1rem", borderRadius: "1rem", background: "#4F5D2F", color: "#fff", border: "none", cursor: "pointer" }}>
                    Adicionar ao carrinho
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {loading && (
        <div>
          <CircularProgress
            thickness={5}
            style={{ margin: "5rem auto", display: "block" }}
            sx={{ color: "#001111" }}
          />
          <p>Loading products...</p>
        </div>
      )}
      {error && <p>Error loading products: {error.message} ❌</p>}
    </div>
  );
}