import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}></div>
      <header className={styles.header}></header>
      <div className={styles.header}>
        <h1>TJA SHOP</h1>
       <Link to="/cart" className={style.cartLink}>
          Cart
        </Link>
      </div>
    </header>
  );
}
