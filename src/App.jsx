import "./style/theme.css";
import "./style/global.css";
import { MyTextList } from "./components/MyTextList";
import { MyGrid } from "./components/MyGrid"; 
import { LuckyNumber } from "./components/LuckyNumber";
/*import {Apple} from "lucide-react";*/

export default function App() {

  return (
    //React Fragment
    <>
        <Header/>
        <LuckyNumber/>
    </>

    
  );
}
