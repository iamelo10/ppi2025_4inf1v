import style from "./MyGrid.module.css";
import { Instagram } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Github } from "lucide-react";

export function MyGrid() {
  return (
    <div className={style.container}>
      <header className={style.header}></header>

      <div className={style.header}>
        <img src="https://picsum.photos/seed/picsum/100/100"></img>
        <h1 align="center">Atividade avaliativa</h1>
      </div>

      <main className={style.main}></main>
      <div className={style.main}>
        <div className={style.grid}>
          <div className={style.card}>
            <img className={style.img} src="https://picsum.photos/200/200?random=1"></img>

            <h2>Card 1</h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br></br>Optio fugiat qui nam debitis doloremque esse at
              repellendus,
              <br></br> obcaecati quisquam harum quaerat quas rem itaque ut cum!
              Eos quaerat pariatur voluptatem?.
            </p>
          </div>

          <div className={style.card}>
            <img className={style.img} src="https://picsum.photos/200/200?random=2"></img>
            <h2>Card 2</h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br></br>Optio fugiat qui nam debitis doloremque esse at
              repellendus,
              <br></br> obcaecati quisquam harum quaerat quas rem itaque ut cum!
              Eos quaerat pariatur voluptatem?.
            </p>
          </div>

          <div className={style.card}>
            <img className={style.img} src="https://picsum.photos/200/200?random=3"></img>
            <h2>Card 3</h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br></br>Optio fugiat qui nam debitis doloremque esse at
              repellendus,
              <br></br> obcaecati quisquam harum quaerat quas rem itaque ut cum!
              Eos quaerat pariatur voluptatem?.
            </p>
          </div>

          <div className={style.card}>
            <img className={style.img} src="https://picsum.photos/200/200?random=4"></img>
            <h2>Card 4</h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br></br>Optio fugiat qui nam debitis doloremque esse at
              repellendus,
              <br></br> obcaecati quisquam harum quaerat quas rem itaque ut cum!
              Eos quaerat pariatur voluptatem?.
            </p>
          </div>

          <div className={style.card}>
            <img className={style.img} src="https://picsum.photos/200/200?random=5"></img>
            <h2>Card 5</h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br></br>Optio fugiat qui nam debitis doloremque esse at
              repellendus,
              <br></br> obcaecati quisquam harum quaerat quas rem itaque ut cum!
              Eos quaerat pariatur voluptatem?.
            </p>
          </div>
        </div>
      </div>

      <footer className={style.footer}>
        <div className={style.text1}>
          <p align="left"> IFRN Campus Macau</p>
          <p align="left"> Curso tecnico integrado em informatica</p>
          <p align="left"> Programação para internet 2025</p>
        </div>
        <div className={style.text2}>
          <p align="center">Aluna: Iasmim Vitoria</p>
        </div>

        
          <div className={style.icons}>
            <Instagram />
            <Github />
            <MessageCircle />
          </div>
        
      </footer>
    </div>
  );
}
