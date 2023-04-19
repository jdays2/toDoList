import styles from "./Task.module.css";
import { BsFillTrashFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import {
	deleteSomeItems,
	toggleReadiness,
	changeItemValue,
} from "./../../../redux/slices/formSlice";

import { useDispatch } from "react-redux";
import { useState } from "react";

function Task({ value, idList, id }) {
	const [justRead, setJustRead] = useState(true);
	const [done, setDone] = useState(false);

	const dispatch = useDispatch();
	const onChangeHandler = (e, idList, id, value) => {
		e.preventDefault();
		e.target.style.height = "auto";
		e.target.style.height = e.target.scrollHeight - 16 + "px";
		dispatch(changeItemValue({ idList, id, value }));
	};

	const setActive = () => {
		if (justRead) {
			setDone(!done);
			alert("active!");
		}
	};
	return (
		<div
			className={done ? `${styles.task} ${styles.taskDone}` : `${styles.task}`}>
			<CiEdit
				onClick={() => setJustRead(!justRead)}
				className={styles.edit_button}>
				1
			</CiEdit>
			<textarea
				className={
					justRead ? styles.taskName : `${styles.taskName} ${styles.active}`
				}
				value={value}
				readOnly={justRead}
				onChange={(e) => {
					onChangeHandler(e, idList, id, e.target.value);
				}}
				onClick={setActive}
			/>

			<BsFillTrashFill
				className={styles.deleteElement}
				onClick={() => dispatch(deleteSomeItems({ idList, id }))}
			/>
		</div>
	);
}

export default Task;
