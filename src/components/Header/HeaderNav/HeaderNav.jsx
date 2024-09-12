import React, { useState } from 'react';
import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import css from './HeaderNav.module.scss';
// import BurgerMenu from '../BurgerMenu';
// import Modal from './Modal';

const BurgerMenu = lazy(() =>
  import('components/Header/BurgerMenu/BurgerMenu')
);
const Modal = lazy(() => import('components/Header/HeaderNav/Modal/Modal'));

function HeaderNav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      navigate('/price');
    } else {
      navigate('/');
    }
    // console.log('Menu state:', !isMenuOpen);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      navigate('/price');
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

      {isOpen && (
        <Suspense fallback={<div>Loading Modal...</div>}>
          <Modal isOpen={isOpen} toggleModal={toggleModal} />
        </Suspense>
      )}

      {isMenuOpen && (
        <Suspense fallback=<div>Loading Menu...</div>>
          <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </Suspense>
      )}
    </div>
  );
}

export default HeaderNav;
