import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}></div>
      <header className={styles.header}></header>
      <div className={styles.header}>
        
        <h1 align="center"> ATIVIDADE CONTADOR</h1>
      </div>
    </header>
  );
}
