import React from "react";

import css from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav/HeaderNav";

function Header() {
  return (
    <header>
      <div className={css.header}>
        <HeaderLogo />
        <HeaderNav />
      </div>
    </header>
  );
}

export default Header;
