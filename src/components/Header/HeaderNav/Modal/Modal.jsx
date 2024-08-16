import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import css from './Modal.module.scss';
import cssBtnClose from '../../BurgerMenu/BtnClose/BtnClose.module.scss';

function Modal({ isOpen, toggleModal }) {
  return (
    <div>
      {/* <button
        type="button"
        onClick={toggleModal}
        className={`${css.navSiteLink} ${css.btnPrice}`}
      >
        Прайс
      </button> */}

      {isOpen && (
        <div className={css.backdrop} data-modal>
          <div className={css.modal} onClick={e => e.stopPropagation()}>
            <div className={css.modalBox}>
              <div className={css.circleTitile}></div>
              <h2 className={css.titleModal}>Прайс</h2>

              <ul className={css.textModal}>
                <li className={css.textModalItem}>
                  Денне перебування без заселення - 150 грн
                </li>
                {/* <li className={css.textModalItem}>Перебування у буденний день - 300 грн з людини</li> */}
                {/* <li className={css.textModalItem}>Перебування у вихідний день - 350 грн з людини</li> */}
                <li className={css.textModalItem}>
                  Перебування з заселенням - 400 грн
                </li>

                <li className={`${css.textModalItem} ${css.psTextModal}`}>
                  (Ціна вказана за одну особу)
                </li>
              </ul>

              <h3 className={css.subtitleModal}>У вартість входить:</h3>

              <ul className={css.modalDescr}>
                <li className={css.modalDescrItem}>мангал</li>
                <li className={css.modalDescrItem}>альтанка</li>
                <li className={css.modalDescrItem}>стоянка</li>
              </ul>

              <div className={css.modalReservedBox}>
                <p>
                  <b
                    className={`${css.subtitleModal} ${css.subtitleModalSecond}`}
                  >
                    Зробити замовлення
                  </b>
                </p>
                <div className={css.modalContactBox}>
                  <a className={css.contactModal} href="tel:+380675609482">
                    0675609482
                  </a>
                  <a className={css.contactModal} href="tel:+380964875185">
                    0964875185
                  </a>
                </div>
              </div>

              {/* SOCILA */}
              <div className={css.socialModal}>
                <ul className={css.socialModalList}>
                  <li className={css.socialModalItem}>
                    <a
                      href="https://www.instagram.com/baza_otdykha_kr/"
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      className={css.socialModalLink}
                    >
                      Instagram
                      <span className={css.socialModalBorder}></span>
                    </a>
                  </li>
                  <li className={css.socialModalItem}>
                    <a
                      href="https://t.me/datcha_bv"
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      className={css.socialModalLink}
                    >
                      Telegram
                      <span className={css.socialModalBorder}></span>
                    </a>
                  </li>

                  <li className={css.socialModalItem}>
                    <a
                      href="https://www.facebook.com/datcha.afalina"
                      target="_blank"
                      rel="noopener nofollow noreferrer"
                      className={css.socialModalLink}
                    >
                      Facebook
                      <span className={css.socialModalBorder}></span>
                    </a>
                  </li>
                </ul>
              </div>

              {/*  close-btn */}
              <button
                type="button"
                className={`${cssBtnClose.menuToggle} ${css.modalClose}`}
                onClick={toggleModal}
              >
                <IoCloseOutline className={cssBtnClose.menuCloseIcon} />
                {/* <svg width="38" height="38">
                  <use href="./images/icons.svg#icon-btn-close"></use>
                </svg> */}
              </button>

              <div className={css.circleL}></div>
              <div className={css.circleR}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
