import React from "react";

import css from "./BtnClose.module.scss";
import { IoCloseOutline } from "react-icons/io5";

function BtnClose({ toggleMenu }) {
  const closeMenu = () => {
    toggleMenu();
  };

  return (
    <>
      <button
        className={`${css.menuToggle} ${css.menuClose} ${css.jsCloseMenu}`}
        onClick={closeMenu}
        aria-label="Закрити меню"
      >
        <IoCloseOutline className={css.menuCloseIcon} />
      </button>
    </>
  );
}

export default BtnClose;
