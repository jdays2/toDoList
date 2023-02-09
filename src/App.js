import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header/Header";

import Form from "./components/Form/TaskForm";
import { useSelector } from "react-redux";

function App() {
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
              id={i}
              created={e.isCreated}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
