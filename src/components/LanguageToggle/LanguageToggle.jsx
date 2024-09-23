import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../redux/languageSlice';
import { selectLanguage } from '../../redux/selectors';

import css from './LanguageToggle.module.scss';

function LanguageToggle() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  // const { language, isActive } = useSelector(selectLanguage);
  const currentLanguage = useSelector(selectLanguage);
  const isActive = currentLanguage === 'ru';

  const handleLanguageChange = lng => {
    i18n.changeLanguage(lng);
    dispatch(changeLanguage(lng));
  };

  const handleToggleClick = () => {
    const newLanguage = currentLanguage === 'ua' ? 'ru' : 'ua';
    handleLanguageChange(newLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <>
      <div className={css.toggleLng} onClick={handleToggleClick}>
        <div
          className={`${css.circleLng} ${isActive ? css.activeR : css.activeL}`}
        ></div>

        <ul className={css.listLng}>
          <li className={css.itemLng}>
            <p className={css.textLng}>UA</p>
          </li>
          <li className={css.itemLng}>
            <p className={css.textLng}>RU</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LanguageToggle;
