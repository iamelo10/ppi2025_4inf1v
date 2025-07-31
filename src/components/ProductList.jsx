import styles from "./ProductList.module.css";
import { CircularProgress } from "@mui/material";
import { Product } from "./Product";
import { useContext, useState } from "react";
import { CartContext } from "../service/CartContext";

export function ProductList() {
  const { products, loading, error } = useContext(CartContext);
  const [searchText, setSearchText] = useState("");

  const filteredProducts = products.filter((product) =>
    `${product.title} ${product.description}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          className={styles.searchInput}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className={styles.clearButton}
          onClick={() => setSearchText("")}
        >
          Clear
        </button>
      </div>

      <div className={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>
            No products found.
          </p>
        )}
      </div>

      {loading && (
        <div>
          <CircularProgress
            thickness={5}
            style={{ margin: "2rem auto", display: "block" }}
            sx={{ color: "#001111" }}
          />
          <p>Loading products...</p>
        </div>
      )}

      {error && <p>Error loading products: {error.message}</p>}
    </div>
  );
}