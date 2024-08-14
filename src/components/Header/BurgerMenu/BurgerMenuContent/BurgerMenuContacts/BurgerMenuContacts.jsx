import css from "./BurgerMenuContacts.module.css";
import mapIcon from "../../../../../img/logos_google-maps.svg";

function BurgerMenuContacts() {
  return (
    <div>
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
              href="httSpetific://goo.gl/maps/Yw1rKM6HGrmVK9iBA"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <img src={mapIcon} alt="map" />
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
    </div>
  );
}

export default BurgerMenuContacts;
