import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

import css from "./HeaderNav.module.css";
import BurgerMenu from "../BurgerMenu";

function HeaderNav() {
  const [isMenuOpen, setManuOpen] = useState(false);
  const toggleMenu = () => {
    setManuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className={css.headerNav}>
        <div className={css.headerNavBox}>
          <button
            type="button"
            className={css.btnBurgerMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            <FiMenu className={css.btnBurgerMenuIcon} />
          </button>
        </div>
      </div>
      <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default HeaderNav;