import css from './Hero.module.scss';
import ContactsHero from './ContactsHero';
import SetSocial from 'components/SetSocial';

function Hero() {
  return (
    <>
      <section className={css.hero}>
        <div className={css.heroContaier}>
          <h1 className={css.titleHero}>Datcha</h1>
          <h2 className={css.subtitleHero}>база відпочинку</h2>
        </div>

        <div className={css.heroBoxContactSocial}>
          <ContactsHero />
          <SetSocial iconColor={css.iconHeroColor} />
        </div>
      </section>
    </>
  );
}

export default Hero;
