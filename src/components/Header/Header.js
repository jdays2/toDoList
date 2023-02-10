import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getForm } from "../../redux/slices/formSlice";
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
  const dispatch = useDispatch();
  const isCreated = useSelector((state) => {
    return state.form.isCreated;
  });

  const [popupOpened, SetpopupOpened] = React.useState(false);

  return (
    <div className={styles.header}>
      <p className={styles.home}>HOME</p>
      <h1 onClick={() => dispatch(getForm(false))}>
        {isCreated ? "What's the plan?" : ""}
      </h1>

      <div>
        <p className={styles.abouteMe}>ABOUT ME</p>
        {!popupOpened && (
          <CgProfile
            className={styles.profileIcon}
            onClick={() => {
              SetpopupOpened(true);
            }}
          />
        )}
        {popupOpened ? (
          <>
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
            <AiOutlineCloseCircle
              className={styles.exit}
              onClick={() => {
                SetpopupOpened(false);
              }}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
