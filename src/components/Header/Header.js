import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getForm } from "../../redux/slices/formSlice";

function Header() {
  const dispatch = useDispatch();
  const isCreated = useSelector((state) => {
    return state.form.isCreated;
  });

  return (
    <div className={styles.header}>
      <p className={styles.home}>HOME</p>
      <h1 onClick={() => dispatch(getForm(false))}>
        {isCreated ? "What's the plan?" : ""}
      </h1>
    </div>
  );
}

export default Header;
