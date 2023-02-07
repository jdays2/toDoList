import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import axios from "axios";
import Form from "./components/Form/Form";

function App() {
  //тест подключения axios, and работа с mocapi
  // useEffect(() => {
  //   axios.post("https://63dfa827a76cfd4105862e5c.mockapi.io/items", {
  //     name: "Mark",
  //   });
  // }, []);

  return (
    <div className="App">
      <Header />
      <Form />

      <div className="content__wrapper">
        <TaskList />
        <TaskList />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
