import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header/Header";

import Form from "./components/Form/TaskForm";

import { BsPlusSquareFill } from "react-icons/bs";
import { getForm } from "./redux/slices/formSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const tasks = useSelector((state) => state.form.tasks);
	const dispatch = useDispatch();
	const isCreated = useSelector((state) => state.form.isCreated);

	return (
		<div className="App">
			<div class="wrapper">
				<Header />
				<Form />

				<button
					className={isCreated ? `tryMeButton` : `hidden`}
					onClick={() => dispatch(getForm(false))}>
					<span>"THE NEW LIFE ORDER"</span>
					<BsPlusSquareFill className="addIcon" />
				</button>

				<div className="content__wrapper">
					{tasks.map((e, i) => {
						return (
							<TaskList
								title={e.title}
								items={e.items}
								key={i}
								id={i}
								created={e.isCreated}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
