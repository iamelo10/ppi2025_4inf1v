import "./style/theme.css";
import "./style/global.css";
import { MyText } from "./components/MyText";

export default App;
function App() {
  const texts = [
    {
      title: "Lorem ipsum dolor",
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
  ];

  return (
    //React Fragment
    <>
      {texts.map((text, index) => (
        <MyText key={index} title={`${index + 1}. ${text.title}`}>
          {text.text}
        </MyText>
      ))}
    </>
  );
}
