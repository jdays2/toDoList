import styles from "./Task.module.css";
import { HiOutlineCube } from "react-icons/hi";
import { BsFillTrashFill } from "react-icons/bs";
import {
  deleteSomeItems,
  toggleReadiness,
} from "./../../../redux/slices/formSlice";

import { useDispatch } from "react-redux";

function Task({ value, idList, id, done }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.task}>
      <HiOutlineCube
        className={
          done
            ? `${styles.misterySquare} ${styles.done}`
            : `${styles.misterySquare}`
        }
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
