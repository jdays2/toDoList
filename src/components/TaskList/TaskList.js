import styles from "./TaskList.module.css";
import Task from "./Task/Task";
import addNewElement from "../../assets/img/createNewElement.svg";
import { AiOutlineCloseSquare } from "react-icons/ai";

function TaskList({ items, title, onClick }) {
  return (
    <div className={styles.list__wrapper}>
      <div className={styles.item}>
        <img className={styles.addNew} src={addNewElement} />
        <AiOutlineCloseSquare
          className={styles.deleteElement}
          onClick={onClick}
        />
        <p className={styles.title}>{title}:</p>
        {items &&
          items.map((e, i) => {
            return <Task value={e} key={i} />;
          })}
      </div>
    </div>
  );
}

export default TaskList;
