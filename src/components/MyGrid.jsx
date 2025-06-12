import style from './MyGrid.module.css';
import { Instagram } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Github } from 'lucide-react';

export function MyGrid() {
  return (
    <div className={style.container}>
        <header className={style.header}/>
        <main  className={style.main}/>
        <div className={style.main}>
            <div className={style.grid}>
                <div className={style.card}>
                    <img src="https://picsum.photos/200/200?random=1"></img>
                    <h2>Card 1</h2>
                    <p>This is the first card.</p>
                </div>

                <div className={style.card}>
                    <img src="https://picsum.photos/200/200?random=2"></img>
                    <h2>Card 2</h2>
                    <p>This is the first card.</p>
                </div>

                <div className={style.card}>
                    <img src="https://picsum.photos/200/200?random=3"></img>
                    <h2>Card 3</h2>
                    <p>This is the first card.</p>
                </div>

                <div className={style.card}>
                    <img src="https://picsum.photos/200/200?random=4"></img>
                    <h2>Card 4</h2>
                    <p>This is the first card.</p>
                </div>

                <div className={style.card}>
                    <img src="https://picsum.photos/200/200?random=5"></img>
                    <h2>Card 5</h2>
                    <p>This is the first card.</p>
                </div>
            </div>
        </div>
        <footer className={style.footer}/>
        <div className={style.footer}>
        <p>IFRN Campus Macau</p> 
        <p>Curso tecnico integrado em informatica</p> 
        <p>Programação para internet 2025</p> 

        <p align="center">Aluna: Iasmim Vitoria</p>

        <div className={style.card}>
            
                <Instagram />
                <Github />
                <MessageCircle />
            </div>
        </div>

        </div>
  );
}