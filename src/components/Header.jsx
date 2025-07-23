import { ShoppingBasket } from "lucide-react";
import style from "./Header.module.css";
import { Link } from "react-router";

export function Header({ cart }) {
  return (
    <div className={style.container}>
      <Link to="/" className={style.link}><h1>TJA Megastore</h1></Link>
      <Link to="/cart" className={style.link}>
        <div className={style.cartInfo}>
          <ShoppingBasket size={32} />
          <p>
            Total: R$ {cart
              .reduce((total, product) => total + product.price * product.quantity, 0)
              .toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
}