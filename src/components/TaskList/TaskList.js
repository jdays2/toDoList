import styles from "./TaskList.module.css";
import Task from "./Task/Task";

function TaskList() {
  return (
    <div className={styles.list__wrapper}>
      <div className={styles.item}>
        <p className={styles.title}>Shopping:</p>
        <Task />
      </div>
    </div>
  );
}

export default TaskList;
