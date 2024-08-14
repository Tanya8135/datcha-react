import React from "react";

import css from "./BurgerMenuContent.module.css";

function BurgerMenuContent() {
  return (
    <div>
      <div className={css.burgerMenu}>
        <ul className={css.BurgerMenuList}>
          <h2 className={css.butgerMenuTitle}>Прайс</h2>
          <li className={css.burgerMenuItem}>
            <p className={css.burgerMenuText}>
              Денне перебування без заселення
            </p>
            <p className={css.burgerMenuPrice}>150 грн</p>
          </li>
          <li className={css.burgerMenuItem}>
            <p className={css.burgerMenuText}>Перебування у буденний день</p>
            <p className={css.burgerMenuPrice}>350 грн</p>
          </li>
          <li className={css.burgerMenuItem}>
            <p className={css.burgerMenuText}>Перебування з заселенням</p>
            <p className={css.burgerMenuPrice}>400 грн</p>
          </li>
          <li>
            {" "}
            className={`${css.burgerMenuItem} ${css.burgerMenuItemCenter}`}
          </li>
        </ul>

        <ul className={css.burgerMenuDescrList}>
          <h3 className={css.butgerMenuSubtitle}>У вартість входить:</h3>
          <li className={css.burgerMenuItemDescr}>
            <p className={css.burgerMenuDescrText}>мангал</p>
          </li>
          <li className={css.burgerMenuItemDescr}>
            <p className={css.burgerMenuDescrText}>альтанка</p>
          </li>
          <li className={css.burgerMenuItemDescr}>
            <p className={css.burgerMenuDescrText}>стоянка</p>
          </li>
        </ul>
      </div>

      <div className={css.burgerMenuContacts}>
        <ul className={css.burgerMenuContactsList}>
          <li className={css.burgerMenuContactItem}>
            <a
              id="tel:+380964875185"
              href="tel:+380964875185"
              className={`${css.menuContactsLink} ${css.menuContactsLinkAccent}`}
            >
              +38 096 487 51 85
            </a>
          </li>
          <li className={css.burgerMenuContactItem}>
            <a
              id="tel:+380675609482"
              href="tel:+380675609482"
              className={`${css.menuContactsLink} ${css.menuContactsLinkAccent}`}
            >
              +38 067 560 94 82
            </a>
          </li>
        </ul>

        <address className={css.burgerMenuAddressBox}>
          <div className={css.burgerMenuMap}>
            <a
              href="https://goo.gl/maps/Yw1rKM6HGrmVK9iBA"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <img src="./img/logos_google-maps.svg" alt="map" />
            </a>
          </div>
          <div className={css.burgerMenuAddressName}>
            <a
              href="https://goo.gl/maps/Yw1rKM6HGrmVK9iBA"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className={css.burgerMenuAddressNameLink}
            >
              пров. Набережний 5а <br />
              с. Чкаловка
            </a>
          </div>
        </address>
      </div>

      <div className={css.burgerMenuSocial}>
        <ul className={css.burgerMenuSocialList}>
          <li className={css.burgerMenuSocialItem}>
            <a
              href="https://www.instagram.com/baza_otdykha_kr/"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className={css.menuSocialLink}
            >
              Instagram
              <span className={css.burgerMenuSocialBorder}></span>
            </a>
          </li>
          <li className={css.burgerMenuSocialItem}>
            <a
              href="https://t.me/datcha_bv"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className={css.menuSocialLink}
            >
              Telegram
              <span className={css.burgerMenuSocialBorder}></span>
            </a>
          </li>
          <li className={css.burgerMenuSocialItem}>
            <a
              href="https://www.facebook.com/datcha.afalina"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className={css.menuSocialLink}
            >
              Facebook
              <span className={css.burgerMenuSocialBorder}></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenuContent;
