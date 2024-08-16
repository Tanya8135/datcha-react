import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import css from './HeaderNav.module.scss';
import BurgerMenu from '../BurgerMenu';
import Modal from './Modal';

function HeaderNav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log('Menu state:', !isMenuOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log('Menu state:', !isOpen);
  };

  return (
    <div>
      <div className={css.headerNav}>
        <div className={css.headerNavBox}>
          <ul className={css.navSite}>
            <li className={css.navSiteItem}>
              {/* eslint-disable-next-line */}
              {/* <a className={`${css.navSiteLink} ${css.btnPrice}`}>Прайс</a> */}
              <button
                type="button"
                onClick={toggleModal}
                className={`${css.navSiteLink} ${css.btnPrice}`}
              >
                Прайс
              </button>
            </li>
            <li className={css.navSiteItem}>
              <a href="#contacts" className={css.navSiteLink}>
                Контакти
              </a>
            </li>
            <li className={css.navSiteItem}>
              <a href="#about" className={css.navSiteLink}>
                Про нас
              </a>
            </li>
            <li className={css.navSiteItem}>
              <a href="#foto" className={css.navSiteLink}>
                Фото
              </a>
            </li>
          </ul>

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
      <Modal isOpen={isOpen} toggleModal={toggleModal} />

      <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default HeaderNav;
