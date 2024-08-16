import css from './SocialHero.module.scss';

function SocialHero() {
  return (
    <div>
      <ul className={css.socialHeroSet}>
        <li className={css.socialHeroSetItem}>
          <a
            href="https://www.instagram.com/baza_otdykha_kr/"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className={css.iconColor}
          >
            test
          </a>
        </li>
        <li className={css.socialHeroSetItem}>
          <a
            href="https://www.facebook.com/datcha.afalina"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className={css.iconColor}
          >
            test
          </a>
        </li>
        <li className={css.socialHeroSetItem}>
          <a
            href="https://t.me/datcha_bv"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className={css.iconColor}
          >
            test
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialHero;
