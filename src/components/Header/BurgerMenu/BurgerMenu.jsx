import React from "react";

// import css from "./BurgerMenu.module.css";
import css from './BurgerMenu.module.scss';
import BtnClose from "./BtnClose";
import BurgerMenuContent from "./BurgerMenuContent";

function BurgerMenu({ isMenuOpen, toggleMenu }) {
  return (
    <div
      className={`${css.menuContainer} ${
        isMenuOpen ? css.jsMenuContainer : ""
      }`}
    >
      {/* btn-function */}
      {isMenuOpen && (
        <div className={css.burgerMenu}>
          <BtnClose toggleMenu={toggleMenu} />
          <BurgerMenuContent />
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
