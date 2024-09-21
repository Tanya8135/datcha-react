import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../redux/languageSlice';
import { selectLanguage } from '../../redux/selectors';

import css from './LanguageToggle.module.scss';

function LanguageToggle() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const currentLanguage = useSelector(selectLanguage);

  const handleLanguageChange = lng => {
    i18n.changeLanguage(lng);
    dispatch(changeLanguage(lng));
  };

  return (
    <>
      <button
        className={css.btnTest}
        onClick={() => handleLanguageChange('ru')}
        disabled={currentLanguage === 'ru'}
      >
        рус.
      </button>
      <button
        className={css.btnTest}
        onClick={() => handleLanguageChange('ua')}
        disabled={currentLanguage === 'ua'}
      >
        Укр.
      </button>
    </>
  );
}

export default LanguageToggle;
