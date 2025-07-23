import style from "./Cart.module.css";

export function Cart({ cart, onClearCart, increaseQuantity, decreaseQuantity }) {
  return (
    <div className={style.cart}>
      <h2>Carrinho de Compras</h2>
      <button
        onClick={onClearCart}
        style={{
          marginBottom: "2rem",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          background: "#A44200",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Remover todos
      </button>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul style={{ width: "100%" }}>
          {cart.map((product) => (
            <div className={style.cartList} key={product.id}>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{
                    width: "80px",
                    borderRadius: "1rem",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h3>{product.title}</h3>
                  <p>Preço: R$ {product.price.toFixed(2)}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "1rem",
                        background: "#A44200",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "1rem",
                        background: "#4F5D2F",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}