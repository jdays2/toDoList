import styles from "./ItemForm.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentFormTitleValue,
  createNewTask,
} from "../../../redux/slices/formSlice";
import { IoCreateOutline, IoArrowUndoOutline } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";

function ItemForm() {
  const dispatch = useDispatch();

  const titleValue = useSelector((state) => state.form.currentFormTitleValue);
  const isCreated = useSelector((state) => state.form.isCreated);

  const onHandler = (event) =>
    dispatch(setCurrentFormTitleValue(event.target.value));

  console.log(useSelector((state) => state.form));

  return (
    <div className={!isCreated ? styles.root : styles.hidden}>
      <form className={styles.form}>
        <div className={styles.form__content}>
          <button className={styles.button__wrapper}>
            <CiCircleRemove
              className={styles.buttonOne}
              onClick={(event) => {
                event.preventDefault();
              }}
            ></CiCircleRemove>
          </button>
          <input
            value={titleValue}
            onChange={(event) => onHandler(event)}
            className={styles.imput}
            type="text"
            placeholder="What should be done?"
          />
          <button className={styles.button__wrapper}>
            <IoCreateOutline
              className={styles.buttonTwo}
              onClick={(event) => {
                event.preventDefault();
              }}
            ></IoCreateOutline>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ItemForm;
