import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header/Header";
import videoBg from "./../src/assets/vid/video.mp4";

import Form from "./components/Form/TaskForm";
import { useSelector } from "react-redux";
import { BsPlusSquareFill } from "react-icons/bs";

function App() {
  const tasks = useSelector((state) => state.form.tasks);
  return (
    <div className="App">
      <video src={videoBg} autoPlay muted loop />
      <div class="wrapper">
        <Header />
        <Form />
        <button className="tryMeButton">
          <span>THE NEW LIFE ORDER.</span>
          <BsPlusSquareFill className="addIcon" />
        </button>
        <p className="discription">
          Try to organize your day and make a clear plan of action. You will be
          able to organize and consciously approach your life, making it more
          orderly and under your control. With this preparation, you can do
          anything. Something else? Get started!
        </p>
        <div className="content__wrapper">
          {tasks.map((e, i) => {
            return (
              <TaskList
                title={e.title}
                items={e.items}
                key={i}
                id={i}
                created={e.isCreated}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
