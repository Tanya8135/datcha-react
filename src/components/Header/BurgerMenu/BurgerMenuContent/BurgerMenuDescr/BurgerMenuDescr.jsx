import { useTranslation } from 'react-i18next';
import css from './BurgerMenuDescr.module.scss';

function BurgerMenuDescr() {
  const { t } = useTranslation();
  return (
    <>
      <div className={css.burgerMenuDescr}>
        <ul className={css.burgerMenuDescrList}>
          <h2 className={css.burgerMenuDescrTitle}>Прайс</h2>
          <li className={css.burgerMenuDescrItem}>
            <p className={css.burgerMenuDescrText}>{t('pricing.pricedescr1')}</p>
            <p className={css.burgerMenuDescrPrice}>150 грн</p>
          </li>
          {/* <li className={css.burgerMenuDescrItem}>
            <p className={css.burgerMenuDescrText}>
              {t('pricing.pricedescr2')}
            </p>
            <p className={css.burgerMenuDescrPrice}>350 грн</p>
          </li> */}
          <li className={css.burgerMenuDescrItem}>
            <p className={css.burgerMenuDescrText}>{t('pricing.pricedescr3')}</p>
            <p className={css.burgerMenuDescrPrice}>400 грн</p>
          </li>
          <li
            className={`${css.burgerMenuDescrItem} ${css.burgerMenuDescrItemCenter}`}
          >
            <p className={css.burgerMenuDescrTextItalic}>
              ({t('pricing.note')})
            </p>
          </li>
        </ul>

        <ul className={css.burgerMenuSpetificList}>
          <h3 className={css.butgerMenuSubtitle}>{t('subtitleModal')}</h3>
          <li className={css.burgerMenuItemSpetific}>
            <p className={css.burgerMenuSpetificText}>мангал</p>
          </li>
          <li className={css.burgerMenuItemSpetific}>
            <p className={css.burgerMenuSpetificText}>{t('descrmodal')}</p>
          </li>
          <li className={css.burgerMenuItemSpetific}>
            <p className={css.burgerMenuSpetificText}>стоянка</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BurgerMenuDescr;
