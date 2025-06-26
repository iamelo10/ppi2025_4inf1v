import "./style/theme.css";
import "./style/global.css";
import { Header } from "./components/Header";
import { LuckyNumber } from "./components/LuckyNumber";

export default function App() {
  return (
    //React Fragment
    <>
      <Header />
      <LuckyNumber />
    </>
  );
}