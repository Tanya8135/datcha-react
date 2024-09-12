import React, { useState } from 'react';
import { lazy, Suspense } from 'react';
import { FiMenu } from 'react-icons/fi';

import css from './HeaderNav.module.scss';

const BurgerMenu = lazy(() =>
  import('components/Header/BurgerMenu/BurgerMenu')
);
const Modal = lazy(() => import('components/Header/HeaderNav/Modal/Modal'));

function HeaderNav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    // console.log('Menu state:', !isMenuOpen);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
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

      <Suspense fallback={<div>Loading Menu...</div>}>
        <Modal isOpen={isOpen} toggleModal={toggleModal} />
      </Suspense>

      <Suspense fallback={<div>Loading Modal</div>}>
        <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </Suspense>
    </div>
  );
}

export default HeaderNav;
