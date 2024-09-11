import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../../redux/selectors';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect } from 'react';

import css from './Modal.module.scss';
import cssBtnClose from '../../BurgerMenu/BtnClose/BtnClose.module.scss';

function Modal({ isOpen, toggleModal }) {
  const darkTheme = useSelector(selectTheme);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div
          className={css.backdrop}
          data-modal
          // style={{ background: darkTheme === 'light' ? '#fffbdd' : '#5b594b' }}
        >
          <div
            className={css.modal}
            onClick={e => e.stopPropagation()}
            style={{
              background: darkTheme === 'light' ? '#fffbdd' : '#5b594b',
            }}
          >
            <div className={css.modalBox}>
              <div
                className={css.circleTitile}
                style={{
                  background:
                    darkTheme === 'light'
                      ? 'linear-gradient(0deg, #fffbdd85 52%, #9997854d 100%)'
                      : 'linear-gradient(0deg, #5b594b 52%, #fffbdd85 100%)',
                }}
              ></div>
              <h3 className={css.titleModal}>Прайс</h3>

              <ul className={css.textModal}>
                <li className={css.textModalItem}>
                  <p>Денне перебування без заселення - 150 грн</p>
                </li>
                {/* <li className={css.textModalItem}>Перебування у буденний день - 300 грн з людини</li> */}
                {/* <li className={css.textModalItem}>Перебування у вихідний день - 350 грн з людини</li> */}
                <li className={css.textModalItem}>
                  <p>Перебування з заселенням - 400 грн</p>
                </li>

                <li className={`${css.textModalItem} ${css.psTextModal}`}>
                  <p>(Ціна вказана за одну особу)</p>
                </li>
              </ul>

              <h3 className={css.subtitleModal}>У вартість входить:</h3>

              <ul className={css.modalDescr}>
                <li className={css.modalDescrItem}>
                  <p>мангал</p>
                </li>
                <li className={css.modalDescrItem}>
                  <p>альтанка</p>
                </li>
                <li className={css.modalDescrItem}>
                  <p>стоянка</p>
                </li>
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
