import styles from "./Task.module.css";
import { VscCheck } from "react-icons/vsc";
import { BsFillTrashFill } from "react-icons/bs";
import {
  deleteSomeItems,
  toggleReadiness,
} from "./../../../redux/slices/formSlice";

import { useDispatch } from "react-redux";

function Task({ value, idList, id, done }) {
  const dispatch = useDispatch();

  return (
    <div
      className={done ? `${styles.task} ${styles.taskDone}` : `${styles.task}`}
      onDoubleClick={() => dispatch(toggleReadiness({ idList, id, done }))}
    >
      <VscCheck
        className={done ? `${styles.done}` : `${styles.hidden}`}
        onClick={() => dispatch(toggleReadiness({ idList, id, done }))}
      />

      <p
        className={styles.taskName}
        dataTooltip="эта подсказка длиннее, чем элемент"
      >
        {value}
      </p>

      <BsFillTrashFill
        className={styles.deleteElement}
        onClick={() => dispatch(deleteSomeItems({ idList, id }))}
      />
    </div>
  );
}

export default Task;
