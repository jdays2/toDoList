import styles from "./Header.module.css";
import React from "react";

function Header() {
	return (
		<div className={styles.header}>
			<h1>What will your list be called?</h1>
		</div>
	);
}

export default Header;
