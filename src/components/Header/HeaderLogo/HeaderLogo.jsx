import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../img/logoDatchaWord.svg";

import css from "./HeaderLogo.module.css";

function HeaderLogo() {
  return (
    <div>
      <div className={css.logoHeader}>
        <NavLink className={css.logo}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
    </div>
  );
}

export default HeaderLogo;