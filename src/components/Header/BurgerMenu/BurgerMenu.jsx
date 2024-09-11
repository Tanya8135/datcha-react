import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/selectors';

// import css from "./BurgerMenu.module.css";
import css from './BurgerMenu.module.scss';
import BtnClose from './BtnClose';
import BurgerMenuContent from './BurgerMenuContent';

function BurgerMenu({ isMenuOpen, toggleMenu }) {
  const darkTheme = useSelector(selectTheme);

  return (
    <div
      className={`${css.menuContainer} ${
        isMenuOpen ? css.jsMenuContainer : ''
      }`}
      style={{ background: darkTheme === 'light' ? '#fffbdd' : '#5b594b' }}
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
