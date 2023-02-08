import styles from "./Task.module.css";
import { HiOutlineCube } from "react-icons/hi";
import { BsFillTrashFill } from "react-icons/bs";
import { deleteSomeItems } from "./../../../redux/slices/formSlice";
import { useDispatch } from "react-redux";

function Task({ value, id }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.task}>
      <HiOutlineCube className={styles.misterySquare} />
      <p
        className={styles.taskName}
        dataTooltip="эта подсказка длиннее, чем элемент"
      >
        {value}
      </p>

      <BsFillTrashFill
        className={styles.deleteElement}
        onClick={() => dispatch(deleteSomeItems(id))}
      />
    </div>
  );
}

export default Task;
