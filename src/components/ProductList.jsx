import { CircularProgress } from "@mui/material";
import style from "./ProductList.module.css";
import useState from "react";
import React, { useEffect } from "react";

export function ProductList() {
var category = "smartphones";
var limit = 10;
var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true); 
const [error, setError] = useState(null);


useEffect(() => {
    async function fetchProducts(){
        try{
            const response = await fetch(apiUrl);
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    

 fetchProducts();
 }

}, []);

    return ( 
    <div className={style.container}> 

    <h1 >TJA MEGASTORY</h1>
        {products.map((product) => (
            <div key={product.id} className={style.productCard}>
                <img 
                src={product.thumbnail} alt={product.title} className={style.thumbnail}
                />

                <h2 className={style.ProductTitle}>{`${product.title}`}</h2>
                <p className={style.ProductPrice}>Price: ${product.price}</p>
                <p className={style.ProductDescription}>{`${product.description}`}</p>
                
            </div>

        ))}
        {loading && (
            <div>
                <CircularProgress
                    thickness={5}
                    style={{ margin: "2rem auto", display: "block" }}
                    sx={{color: "var(--primary-color)"}}
                />
        
            <p>Loading products...</p>
            </div>
                
        )}

    </div>
    );
}
