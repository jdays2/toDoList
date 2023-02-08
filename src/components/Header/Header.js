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
      <h1 onClick={() => dispatch(getForm())}>
        {isCreated ? "Just do it" : ""}
      </h1>
    </div>
  );
}

export default Header;
