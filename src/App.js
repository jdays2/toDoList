import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header/Header";

import Form from "./components/Form/TaskForm";
import { CgProfile } from "react-icons/cg";
import { BsTelegram } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { useSelector } from "react-redux";

function App() {
	const tasks = useSelector((state) => state.form.tasks);
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<Form />

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
			<footer className="footer">
				<p>Made by: jdays2</p>
				<div className="footer_link-list">
					<a href="https://github.com/jdays2" target="_blank">
						<AiFillGithub className="footer_link" />
					</a>
					<a href="https://vk.com/ostalosmalovremeni" target="_blank">
						<SlSocialVkontakte className="footer_link" />
					</a>
					<a href="https://www.instagram.com/spiritpizza/" target="_blank">
						<AiOutlineInstagram className="footer_link" />
					</a>
					<a href="https://t.me/Marchezko" target="_blank">
						<BsTelegram className="footer_link" />
					</a>
				</div>
			</footer>
		</div>
	);
}

export default App;
