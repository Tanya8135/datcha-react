import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; /* попробовать использовать вместо useLocation - redux */
import { FiMenu } from 'react-icons/fi';

import BurgerMenu from '../BurgerMenu';
import Modal from './Modal';
import css from './HeaderNav.module.scss';

function HeaderNav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const modalOpen = params.get('price') === 'open';
    const menuOpen = params.get('menu') === 'open';

    setIsOpen(modalOpen);
    setMenuOpen(menuOpen);
  }, [location.search]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      navigate('?menu=open');
    } else {
      navigate('?');
    }
    // console.log('Menu state:', !isMenuOpen);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      navigate('?price=open');
    } else {
      navigate('/');
    }
    // console.log('Menu state:', !isOpen);
  };

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

      {isOpen && <Modal isOpen={isOpen} toggleModal={toggleModal} />}

      {isMenuOpen && (
        <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
    </div>
  );
}

export default HeaderNav;
