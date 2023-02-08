import styles from "./TaskForm.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentFormTitleValue,
  createNewTask,
} from "../../redux/slices/formSlice";
import { IoCreateOutline, IoArrowUndoOutline } from "react-icons/io5";

import { getForm } from "../../redux/slices/formSlice";

function TaskForm() {
  const dispatch = useDispatch();
  const titleValue = useSelector((state) => state.form.currentFormTitleValue);
  const isCreated = useSelector((state) => state.form.isCreated);
  const onHandler = (event) =>
    dispatch(setCurrentFormTitleValue(event.target.value));

  console.log(useSelector((state) => state.form));

  return (
    <div className={!isCreated ? styles.root : styles.hidden}>
      <form className={styles.form}>
        <button className={styles.button__wrapper}>
          <IoArrowUndoOutline
            className={styles.button}
            onClick={(event) => {
              event.preventDefault();
              dispatch(getForm());
            }}
          ></IoArrowUndoOutline>
        </button>
        <input
          value={titleValue}
          onChange={(event) => onHandler(event)}
          className={styles.imput}
          type="text"
          placeholder="Give your list a name."
        />
        <button className={styles.button__wrapper}>
          <IoCreateOutline
            className={styles.button}
            onClick={(event) => {
              event.preventDefault();
              dispatch(createNewTask());
            }}
          ></IoCreateOutline>
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
