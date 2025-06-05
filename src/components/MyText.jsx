import style from './MyText.module.css';

export function MyText({title}) {
  return (
    <div className={style.container}>
    <div className={style.div}>
        <h1 className={style.title}>{title}</h1>
    {/* <p className={style.text}>{children} */}

    </div>
    </div>
  );
}