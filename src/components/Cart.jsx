import style from "./Cart.module.css";

export function Cart({ cart }) {
  return (
    <div className={style.cartContainer}>
      <h2 className={style.cartTitle}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className={style.cartEmpty}>Your cart is empty</p>
      ) : (
        <ul className={style.cartList}>
          {cart.map((item) => (
            <li key={item.id} className={style.cartItem}>
              <img src={item.thumbnail} alt={item.title} className={style.cartImage} />
              <div className={style.cartDetails}>
                <h3 className={style.cartItemTitle}>{item.title}</h3>
                <p className={style.cartItemPrice}>${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
