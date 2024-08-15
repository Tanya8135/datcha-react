import React from "react";

import css from "./BtnClose.module.scss";
import { IoCloseOutline } from "react-icons/io5";

function BtnClose({ toggleMenu }) {
  const closeMenu = () => {
    toggleMenu();
  };

  return (
    <div>
      <button
        className={`${css.menuToggle} ${css.menuClose} ${css.jsCloseMenu}`}
        onClick={closeMenu}
      >
        <IoCloseOutline className={css.menuCloseIcon} />
      </button>
    </div>
  );
}

export default BtnClose;
