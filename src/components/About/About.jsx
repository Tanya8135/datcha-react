import css from './About.module.scss';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <>
      <section className={css.about} id="about">
        <h3 className={css.titleAbout}>{t('about.title')}</h3>

        <div className={css.textAboutUk}>
          <div className={css.textAboutBox}>
            <p className={css.textAbout}>
              {t('about.text1')}
              <span className={`${css.textAccentAbout} noBorder`}>
                {' '}
                “Datcha”
              </span>
              {t('about.text2')}
            </p>
          </div>
          <div className={css.textAboutBox}>
            <p className={css.textAbout}>
              {t('about.text3')}
              {/* База знаходиться на березі річки, що створює атмосферу спокою та
              натхнення, та надає можливість подихати свіжим повітрям,
              насолодитися красою природи навколо і, при бажанні, навіть
              половити рибку. */}
            </p>
          </div>
          <div className={css.textAboutBox}>
            <p className={css.textAbout}>
              {t('about.text4')}
              {/* Головною відмінною рисою є невелика, доглянена територія, що
              створює ще більш комфортні умови для спокійного відпочинку. Для
              цього ми пропонуємо затишні альтанки з мангалами. */}
            </p>
          </div>
          <div className={css.textAboutBox}>
            <p className={css.textAbout}>
              {t('about.text5')}
              {/* Також на території є безкоштовна парковка. */}
            </p>
          </div>
          <div className={css.textAboutBox}>
            <p className={css.textAbout}>
              {t('about.text6')}
              {/* І на закінчення: Наша база відпочинку пропонує зручне місце біля
              річки, де ви можете провести час з друзями, колегами або сім’єю. */}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
