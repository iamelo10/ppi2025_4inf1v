import style from './MyTextList.module.css';    
import { MyText } from './MyText';

export function MyTextList() {
const texts = [
    {
      title: "Lorem ipsum dolor 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere modi vitae reprehenderit incidunt neque. Nostrum doloribus reprehenderit, consequuntur reiciendis quibusdam minima, non aliquam facere praesentium saepe veritatis, rerum asperiores?",
    },
    {
      title: "Lorem ipsum dolor 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere modi vitae reprehenderit incidunt neque. Nostrum doloribus reprehenderit, consequuntur reiciendis quibusdam minima, non aliquam facere praesentium saepe veritatis, rerum asperiores?",
    },
    {
      title: "Lorem ipsum dolor 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere modi vitae reprehenderit incidunt neque. Nostrum doloribus reprehenderit, consequuntur reiciendis quibusdam minima, non aliquam facere praesentium saepe veritatis, rerum asperiores?",
    },
    {
      title: "Lorem ipsum dolor 4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere modi vitae reprehenderit incidunt neque. Nostrum doloribus reprehenderit, consequuntur reiciendis quibusdam minima, non aliquam facere praesentium saepe veritatis, rerum asperiores?",
    },
    {
      title: "Lorem ipsum dolor 5",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere modi vitae reprehenderit incidunt neque. Nostrum doloribus reprehenderit, consequuntur reiciendis quibusdam minima, non aliquam facere praesentium saepe veritatis, rerum asperiores?",
    },
  ];

  return (
    <div>
      <h1 className={style.title}>Meus textos</h1>
    <div className={style.container}>
      {texts.map((text, index) => (
        <MyText key={index} title={`${index + 1}. ${text.title}`}>
          {text.text}
        </MyText>
      ))}
       
    </div>
    </div>
  );
}