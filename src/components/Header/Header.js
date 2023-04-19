import styles from "./Header.module.css";

import { CgProfile } from "react-icons/cg";
import { BsTelegram } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import React from "react";
import {
	AiOutlineCloseCircle,
	AiFillGithub,
	AiOutlineInstagram,
} from "react-icons/ai";
function Header() {
	const [popupOpened, SetPopupOpened] = React.useState(false);

	return (
		<div className={styles.header}>
			{/* <a href="#">
				<p className={styles.home}>HOME</p>
			</a> */}
			<h1>What will your task be called?</h1>

			<div>
				<p
					className={styles.abouteMe}
					onClick={() => {
						SetPopupOpened(!popupOpened);
					}}>
					ABOUT ME
					<div className={styles.links}>
						<div
							className={
								popupOpened
									? `${styles.links_wrapper} ${styles.show}`
									: styles.links_wrapper
							}>
							<a href="https://github.com/jdays2" target="_blank">
								<AiFillGithub className={styles.one} />
							</a>
							<a href="https://vk.com/ostalosmalovremeni" target="_blank">
								<SlSocialVkontakte className={styles.two} />
							</a>
							<a href="https://www.instagram.com/spiritpizza/" target="_blank">
								<AiOutlineInstagram className={styles.tree} />
							</a>
							<a href="https://t.me/Marchezko" target="_blank">
								<BsTelegram className={styles.four} />
							</a>
						</div>
					</div>
				</p>
			</div>
		</div>
	);
}

export default Header;
