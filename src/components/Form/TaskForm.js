import styles from "./TaskForm.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setCurrentFormTitleValue,
	createNewTask,
} from "../../redux/slices/formSlice";
import { IoMdSend } from "react-icons/io";

function TaskForm() {
	const dispatch = useDispatch();
	const titleValue = useSelector((state) => state.form.currentFormTitleValue);
	const isCreated = useSelector((state) => state.form.isCreated);

	const onHandler = (event) =>
		dispatch(setCurrentFormTitleValue(event.target.value));

	const onKeyDown = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			dispatch(createNewTask());
		}
	};
	const setList = () => {
		dispatch(createNewTask());
	};

	return (
		<div className={!isCreated ? styles.root : styles.hidden}>
			<form className={styles.form}>
				<input
					maxLength="28"
					value={titleValue}
					onChange={(event) => onHandler(event)}
					className={styles.imput}
					type="submite"
					placeholder="Type a name and press 'Enter'"
					onKeyDown={onKeyDown}
				/>
				<IoMdSend className={styles.form__button} onClick={setList}></IoMdSend>
			</form>
		</div>
	);
}

export default TaskForm;
