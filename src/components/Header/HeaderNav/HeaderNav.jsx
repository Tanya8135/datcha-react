import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectIsMenuOpen, selectIsModalOpen } from '../../../redux/selectors';
import { toggleMenu, toggleModal } from '../../../redux/modalbmSlice';
import { FiMenu } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import LanguageToggle from 'components/LanguageToggle';
import BurgerMenu from '../BurgerMenu';
import Modal from './Modal';
import css from './HeaderNav.module.scss';

function HeaderNav() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const isModalOpen = useSelector(selectIsModalOpen);
  const { t } = useTranslation();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };

  return (
    <>
      <LanguageToggle />
      <div className={css.headerNav}>
        <div className={css.headerNavBox}>
          <ul className={css.navSite}>
            <li className={css.navSiteItem}>
              <button
                type="button"
                onClick={handleToggleModal}
                className={`${css.navSiteLink} ${css.btnPrice}`}
                aria-label="Прайс"
              >
                Прайс
              </button>
            </li>
            <li className={css.navSiteItem}>
              <a href="#contacts" className={css.navSiteLink}>
                {/* Контакти */}
                {t('nav.contact')}
              </a>
            </li>
            <li className={css.navSiteItem}>
              <a href="#about" className={css.navSiteLink}>
                {/* Про нас */}
                {t('about.title')}
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
            onClick={handleToggleMenu}
            aria-label="Меню"
          >
            <FiMenu className={css.btnBurgerMenuIcon} />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} toggleModal={handleToggleModal} />
      )}

      <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={handleToggleMenu} />
    </>
  );
}

export default HeaderNav;
