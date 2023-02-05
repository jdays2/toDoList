import styles from "./Task.module.css";

function Task() {
  return (
    <div className={styles.task}>
      <div className={styles.misterySquare}></div>
      <p className={styles.taskName}>123</p>
    </div>
  );
}

export default Task;
