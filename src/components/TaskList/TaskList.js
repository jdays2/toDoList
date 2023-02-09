import styles from "./TaskList.module.css";
import Task from "./Task/Task";
import addNewElement from "../../assets/img/createNewElement.svg";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Draggable from "react-draggable";

import React from "react";

import { deleteSomeTasks, getItemForm } from "./../../redux/slices/formSlice";
import ItemForm from "../Form/ItemForm/ItemForm";

function TaskList({ items, title, id, created }) {
  const dispatch = useDispatch();

  const dragStartHandler = (event, e) => {
    event.preventDefault();
    console.log("drag", e);
  };
  const dragOverHandler = (e) => {};
  const dragEndHandler = (e) => {
    e.preventDefault();
  };
  const dropHandler = (event, e) => {
    event.preventDefault();
    console.log("drag", e);
  };
  return (
    <Draggable>
      <div className={styles.list__wrapper}>
        <div className={styles.item}>
          <img
            className={styles.addNew}
            src={addNewElement}
            onClick={() => {
              dispatch(getItemForm({ id, value: !created }));
            }}
          />
          <AiOutlineCloseSquare
            className={styles.deleteElement}
            onClick={() => dispatch(deleteSomeTasks(id))}
          />
          <p className={styles.title}>{title}</p>

          {items &&
            items.map((e, i) => {
              return (
                <Task
                  draggable={true}
                  onDragEnd={(event) => dragEndHandler(event)}
                  onDragOver={(event) => dragOverHandler(event)}
                  onDrop={(event) => dropHandler(event, e)}
                  value={e.value}
                  key={i}
                  id={i}
                  idList={id}
                  done={e.done}
                />
              );
            })}

          {created ? <ItemForm idList={id} created={created} /> : null}
        </div>
      </div>
    </Draggable>
  );
}

export default TaskList;
