import css from './About.module.scss';

function About() {
  return (
    <div>
      <section className={css.about} id="about">
        <h3 className={css.titleAbout}>Про нас</h3>

        <div className={css.textAboutUk}>
          <div className={css.textAboutBox}>
            <p className={css.textAbout}>
              База відпочинку 
              <span className={css.textAccentAbout}> “Datcha”</span>, розташована
              за межами міста і є місцем для тих, хто хоче насолодитися гарною
              природою, відпочити від міського шуму та повсякденної метушні.
            </p>
          </div>
          <div className={css.textAboutBox}>
            <p className={css.textAbout}>
              База знаходиться на березі річки, що створює атмосферу спокою та
              натхнення, та надає можливість подихати свіжим повітрям,
              насолодитися красою природи навколо і, при бажанні, навіть
              половити рибку.
            </p>
          </div>
          <div className={css.textAboutBox}>
            <p className={css.textAbout}>
              Головною відмінною рисою є невелика, доглянена територія, що
              створює ще більш комфортні умови для спокійного відпочинку. Для
              цього ми пропонуємо затишні альтанки з мангалами.
            </p>
          </div>
          <div className={css.textAboutBox}>
            <p className={css.textAbout}>
              Також на території є безкоштовна парковка.
            </p>
          </div>
          <div className={css.textAboutBox}>
            <p className={css.textAbout}>
              І на закінчення: Наша база відпочинку пропонує зручне місце біля
              річки, де ви можете провести час з друзями, колегами або сім’єю.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
