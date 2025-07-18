import { useEffect, useState } from "react";
import style from "./ProductList.module.css";
import { CircularProgress } from "@mui/material";
import { ShoppingCart } from "lucide-react"; //trocar


export function ProductList() {
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
      
      <div className={style.header}>
      <h1 >TJA Megastore</h1>
      </div>

      {products.map((product) => (
        <div key={product.id} className={style.productCard}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={style.productImage}
          />
          <h2 className={style.productTitle}>{product.title}</h2>
          <p className={style.productPrice}>Price: ${product.price}</p>

          <p className={style.productDescription}>{product.description}</p>
           <div className={style.cart}>
          <button className={style.button}> <ShoppingCart /> Adicionar ao carrinho</button>
           </div>

        </div>
        

      ))}

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
      {error && <p>Error loading products: {error.message} ❌</p>}
    </div>
  );
}