import style from './MyText.module.css';

export function MyText({title, children}) {
  return (
    <div className={style.container}>
    <div className={style.div}>
        <h1 className={style.title}>Meu primeiro React App</h1>
    <p className={style.text}>{children}
    </p>
    </div>
    </div>
  );
}