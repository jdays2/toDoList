import styles from "./TaskList.module.css";
import Task from "./Task/Task";
import addNewElement from "../../assets/img/createNewElement.svg";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { deleteSomeTasks } from "./../../redux/slices/formSlice";
import ItemForm from "../Form/ItemForm/ItemForm";

function TaskList({ items, title, id }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.list__wrapper}>
      <div className={styles.item}>
        <img className={styles.addNew} src={addNewElement} />
        <AiOutlineCloseSquare
          className={styles.deleteElement}
          onClick={() => dispatch(deleteSomeTasks(id))}
        />
        <p className={styles.title}>{title}</p>
        {items &&
          items.map((e, i) => {
            return <Task value={e.value} key={i} id={e.id} />;
          })}
        <ItemForm />
      </div>
    </div>
  );
}

export default TaskList;
