import styles from "./ItemForm.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setCurrentFormItemValue,
	createNewItem,
} from "../../../redux/slices/formSlice";
import { IoMdSend } from "react-icons/io";

function ItemForm({ idList }) {
	const dispatch = useDispatch();

	const titleValue = useSelector(
		(state) => state.form.tasks[idList].currentFormItemValue
	);

	const isCreated = useSelector((state) => state.form.tasks[idList].isCreated);

	const onHandler = (event, idList) =>
		dispatch(setCurrentFormItemValue({ event, idList }));

	const onKeyDown = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			dispatch(createNewItem(idList));
		}
	};

	const setItem = () => {
		dispatch(createNewItem(idList));
	};

	return (
		<div className={!isCreated ? styles.root : styles.hidden}>
			<form className={styles.form}>
				<div className={styles.form__content}>
					<input
						value={titleValue}
						onChange={(event) => onHandler(event.target.value, idList)}
						className={styles.imput}
						type="text"
						placeholder="Add the task name and press 'Enter'"
						onKeyDown={onKeyDown}
					/>
					<IoMdSend
						className={styles.form__button}
						onClick={setItem}></IoMdSend>
				</div>
			</form>
		</div>
	);
}

export default ItemForm;
