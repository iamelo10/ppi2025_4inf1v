import styles from "./LuckyNumber.module.css";
import { useState } from "react";


export function LuckyNumber() {
  var luckyNumber = 0;


    function handleClick() {
        luckyNumber +=1;
        console.log("Número da sorte:" LuckyNumber);
    }


  return (
   <div className="{styles.container}">
    <h1 Contador = {luckyNumber}></h1>
    <button className="{styles.button}" onClick={handleClick}>CLIQUE</button>
        </div>
  );
}