import styles from "./Form.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const titleValue = useSelector((state) => state.form.currentFormTitleValue);
  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <input
          className={styles.imput}
          type="text"
          placeholder="Как назовем ваш список?"
          required
        />
        <input
          className={styles.imput}
          type="text"
          placeholder="?"
          required
          autoFocus
        />

        <button type="submit">asdadasd</button>
      </form>
    </div>
  );
}

export default Form;
