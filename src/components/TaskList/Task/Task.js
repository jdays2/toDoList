import styles from "./Task.module.css";
import { VscCheck } from "react-icons/vsc";
import { BsFillTrashFill } from "react-icons/bs";
import {
	deleteSomeItems,
	toggleReadiness,
	changeItemValue,
} from "./../../../redux/slices/formSlice";

import { useDispatch } from "react-redux";

function Task({ value, idList, id, done }) {
	const dispatch = useDispatch();
	const onChangeHandler = (e, idList, id, value) => {
		e.preventDefault();
		e.target.style.height = "auto";
		e.target.style.height = e.target.scrollHeight - 16 + "px";
		dispatch(changeItemValue({ idList, id, value }));
	};
	return (
		<div
			className={done ? `${styles.task} ${styles.taskDone}` : `${styles.task}`}
			onDoubleClick={() => dispatch(toggleReadiness({ idList, id, done }))}>
			<textarea
				className={styles.taskName}
				value={value}
				onChange={(e) => {
					onChangeHandler(e, idList, id, e.target.value);
				}}
			/>

			<BsFillTrashFill
				className={styles.deleteElement}
				onClick={() => dispatch(deleteSomeItems({ idList, id }))}
			/>
		</div>
	);
}

export default Task;
