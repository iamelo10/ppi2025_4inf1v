import styles from "./LuckyNumber.module.css";

import { useState } from "react";

export function LuckyNumber() {
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [array, setArray] = useState([]);
  const [message, setMessage] = useState("");


    function handleClick() {
    setLuckyNumber(Math.ceil(Math.random() * 31));

    if (array.includes(luckyNumber)) {
      setMessage(`Número já sorteado ${luckyNumber}!`);
    } else {
      setMessage("");
      setArray([...array, luckyNumber]);
    }
  }

  return (
    <div className={styles.container}>
      {luckyNumber ? <h1>Contador = {luckyNumber}</h1> : <h1>Contador = 🎲</h1>}

      <button className={styles.button} onClick={handleClick}>
        Clique!
      </button>

      {message && <p>{message}</p>}
      {array.length > 0 && (
        <div>
          <h3>Números Sorteados arrays: </h3>
          <p>[{array}]</p>
        </div>
      )}

    </div>
  );
}