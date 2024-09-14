import css from './BurgerMenuSocial.module.scss';

function BurgerMenuSocial() {
  return (
    <div>
      <div className={css.burgerMenuSocial}>
        <ul className={css.burgerMenuSocialList}>
          <li className={css.burgerMenuSocialItem}>
            <a
              href="https://www.instagram.com/baza_vidpochynku_kr?igsh=MXNrcDZ1cWwzZXNhbQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className={css.menuSocialLink}
              aria-label="Перейти до Instagram"
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
              aria-label="Перейти на Telegram"
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
              aria-label="Перейти на Facebook"
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
