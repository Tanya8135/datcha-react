import React from "react";

import css from "./BurgerMenu.module.css";

function BurgerMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div
      className={`${css.menuContainer} ${
        isMenuOpen ? css.jsMenuContainer : ""
      }`}
    >
      {/* btn-function */}
      {isMenuOpen && <div className={css.burgerMenu}>
        
        </div>}
    </div>
  );
}

export default BurgerMenu;
