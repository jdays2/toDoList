import styles from "./TaskList.module.css";
import Task from "./Task/Task";
import addNewElement from "../../assets/img/createNewElement.svg";
import { AiOutlineCloseSquare } from "react-icons/ai";

function TaskList() {
  return (
    <div className={styles.list__wrapper}>
      <div className={styles.item}>
        <img className={styles.addNew} src={addNewElement} />
        <AiOutlineCloseSquare className={styles.deleteElement} />
        <p className={styles.title}>Shopping:</p>
        <Task value="12asd3s" />
        <Task value="12asss3s" />
        <Task value="123ssss" />
      </div>
    </div>
  );
}

export default TaskList;
