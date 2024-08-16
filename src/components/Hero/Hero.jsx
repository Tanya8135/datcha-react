import css from './Hero.module.scss';
import ContactsHero from './ContactsHero';
import SocialHero from './SocialHero/SocialHero';

function Hero() {
  return (
    <div>
      <section className={css.hero}>
        <div className={css.heroContaier}>
          <h1 className={css.titleHero}>Datcha</h1>
          <h2 className={css.subtitleHero}>база відпочинку</h2>
        </div>

        <div className={css.heroBoxContactSocial}>
          <ContactsHero />
          <SocialHero />
        </div>
      </section>
    </div>
  );
}

export default Hero;
