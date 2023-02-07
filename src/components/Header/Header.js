import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      {/* <img
        className={styles.logo}
        src="https://www.svgrepo.com/show/356977/todo-list.svg"
      /> */}
      <h1>
        Just do it<span className={styles.blink}>.</span>
      </h1>
      {/* <img
        className={styles.avatar}
        src="https://cdn0.iconfinder.com/data/icons/people-avatar-glyph-1/128/1_21-512.png"
      />
      <span className={styles.profileName}>JDayS</span> */}
    </div>
  );
}

export default Header;
