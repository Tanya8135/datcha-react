import { useTranslation } from 'react-i18next';

import css from './LanguageToggle.module.scss'

function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <button className={css.btnTest} onClick={() => changeLanguage('en')}>рус.</button>
      <button className={css.btnTest} onClick={() => changeLanguage('ua')}>Укр.</button>
    </>
  );
}

export default LanguageToggle;
