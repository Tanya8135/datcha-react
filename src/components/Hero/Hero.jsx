import { useTranslation } from 'react-i18next';

import ContactsHero from './ContactsHero';
import SetSocial from 'components/SetSocial';
import css from './Hero.module.scss';

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <section className={css.hero}>
        <div className={css.heroContaier}>
          <h1 className={css.titleHero}>Datcha</h1>
          <h2 className={css.subtitleHero}>{t('subtitlehero')}</h2>
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
