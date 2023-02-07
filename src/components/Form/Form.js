import styles from "./Form.module.css";
import React from "react";

function Form() {
  const [test, setTest] = React.useState("");
  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <input
          className={styles.imput}
          type="text"
          //   value={}
          onChange={(event) => console.log(event)}
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

        <button
          type="submit"
          onClick={(value) => {
            debugger;
            setTest(value);
            console.log(test);
          }}
        >
          asdadasd
        </button>
      </form>
    </div>
  );
}

export default Form;
