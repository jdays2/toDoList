import styles from "./Task.module.css";
import { HiOutlineCube } from "react-icons/hi";
import { BsFillTrashFill } from "react-icons/bs";

function Task({ value }) {
  return (
    <div className={styles.task}>
      <HiOutlineCube className={styles.misterySquare} />
      <p
        className={styles.taskName}
        dataTooltip="эта подсказка длиннее, чем элемент"
      >
        {value}
      </p>

      <BsFillTrashFill className={styles.deleteElement} />
    </div>
  );
}

export default Task;
