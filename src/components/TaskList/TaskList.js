import styles from "./TaskList.module.css";
import Task from "./Task/Task";
import { AiOutlineCloseSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import React from "react";
import { deleteSomeTasks, getItemForm } from "./../../redux/slices/formSlice";
import ItemForm from "../Form/ItemForm/ItemForm";
import Draggable from "react-draggable";

function TaskList({ items, title, id, created }) {
	const dispatch = useDispatch();

	return (
		<Draggable>
			<div className={styles.list__wrapper}>
				<div className={styles.item}>
					{/* <AiOutlinePlusSquare
						className={styles.addNew}
						onClick={() => {
							dispatch(getItemForm({ id, value: !created }));
						}}
					/> */}
					<AiOutlineCloseSquare
						className={styles.deleteElement}
						onClick={() => dispatch(deleteSomeTasks(id))}
					/>
					<p className={styles.title}>{title}</p>

					{items &&
						items.map((e, i) => {
							return (
								<Task
									value={e.value}
									key={i}
									id={i}
									idList={id}
									done={e.done}
								/>
							);
						})}

					<ItemForm idList={id} created={created} />
				</div>
			</div>
		</Draggable>
	);
}

export default TaskList;
