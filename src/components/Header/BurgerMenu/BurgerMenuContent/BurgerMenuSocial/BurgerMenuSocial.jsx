import css from "./BurgerMenuSocial.module.css";

function BurgerMenuSocial() {
  return (
    <div>
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

export default BurgerMenuSocial;
