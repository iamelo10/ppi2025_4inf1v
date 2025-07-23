import style from "./Product.module.css";

export function Product({ product, addToCart }) {
  return (
    <div key={product.id} className={style.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={style.productImage}
      />
      <h2 className={style.productTitle}>{product.title}</h2>
      <p className={style.productDescription}>{product.description}</p>
      <p className={style.productPrice}>${product.price}</p>
      <button onClick={() => addToCart(product)} className={style.productButton}>ADD TO CART</button>
    </div>
  );
}