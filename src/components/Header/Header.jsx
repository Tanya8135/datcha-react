import React from "react";

import css from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";

function Header() {
  return (
    <header>
      <div className={css.header}>
        <HeaderLogo />
      </div>
    </header>
  );
}

export default Header;
