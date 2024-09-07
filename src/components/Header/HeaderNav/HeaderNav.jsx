import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/selectors';

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

  const darkTheme = useSelector(selectTheme);

  return (
    <div>
      <div className={css.headerNav}>
        <div className={css.headerNavBox}>
          <ul className={css.navSite}>
            <li className={css.navSiteItem}>
              <button
                type="button"
                onClick={toggleModal}
                className={`${css.navSiteLink} ${css.btnPrice}`}
              >
                Прайс
              </button>
            </li>
            <li className={css.navSiteItem}>
              <a
                href="#contacts"
                className={css.navSiteLink}
                style={{ color: darkTheme === 'dark' ? '#fff9d0' : '#263e24' }}
              >
                Контакти
              </a>
            </li>
            <li className={css.navSiteItem}>
              <a
                href="#about"
                className={css.navSiteLink}
                style={{ color: darkTheme === 'dark' ? '#fff9d0' : '#263e24' }}
              >
                Про нас
              </a>
            </li>
            <li className={css.navSiteItem}>
              <a
                href="#foto"
                className={css.navSiteLink}
                style={{ color: darkTheme === 'dark' ? '#fff9d0' : '#263e24' }}
              >
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
