import style from './MyGrid.module.css';

export function MyGrid({title}) {
  return (
    <div className={style.container}>
        <header className={style.header1}></header>
        <header className={style.header2}></header>
        <aside  className={style.aside}></aside>
        <aside  className={style.aside2}></aside>
        <main  className={style.main}></main>
        <div className={style.main}>
            <div className={style.grid}>
                <div className={style.card}>
                    <h2>Card 1</h2>
                    <p>This is the first card.</p>
                </div>
                <div className={style.card}>
                    <h2>Card 2</h2>
                    <p>This is the first card.</p>
                </div>
                <div className={style.card}>
                    <h2>Card 3</h2>
                    <p>This is the first card.</p>
                </div>
                <div className={style.card}>
                    <h2>Card 4</h2>
                    <p>This is the first card.</p>
                </div>
                <div className={style.card}>
                    <h2>Card 5</h2>
                    <p>This is the first card.</p>
                </div>
            </div>
        </div>
        <footer className={style.footer}></footer>
        <footer className={style.footer2}></footer>
    </div>
  );
}