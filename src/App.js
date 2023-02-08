import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import axios from "axios";
import Form from "./components/Form/Form";
import { useSelector, useDispatch } from "react-redux";

import { deleteSomeTasks } from "../src/redux/slices/formSlice";

function App() {
  const dispatch = useDispatch();
  //тест подключения axios, and работа с mocapi
  // useEffect(() => {
  //   axios.post("https://63dfa827a76cfd4105862e5c.mockapi.io/items", {
  //     name: "Mark",
  //   });
  // }, []);
  const tasks = useSelector((state) => state.form.tasks);
  return (
    <div className="App">
      <Header />
      <Form />
      <div className="content__wrapper">
        {tasks.map((e, i) => {
          return (
            <TaskList
              title={e.title}
              items={e.items}
              key={i}
              id={e.id}
              onClick={(id) => dispatch(deleteSomeTasks(id))}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
