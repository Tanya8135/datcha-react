import css from './ContactsHero.module.scss';

function ContactsHero() {
  return (
    <div>
      <ul className={css.contactHero}>
        <li className={css.contactHeroItem}>
          <a href="tel:+380675609482" className={css.contactHeroLink}>
            067 560 94 82
          </a>
        </li>
        <li className={css.contactHeroItem}>
          <a href="tel:+380964875185" className={css.contactHeroLink}>
            096 487 51 85
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactsHero;
