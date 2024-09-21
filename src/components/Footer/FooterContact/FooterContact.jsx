import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectTheme } from '../../../redux/selectors';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';

import css from './FooterContact.module.scss';

function FooterContact() {
  const darkTheme = useSelector(selectTheme);
  const { t } = useTranslation();

  return (
    <div>
      <div className={css.contactBox}>
        <p className={css.subtitleFooter}>
          <b>{t('contact')}</b>
        </p>

        <ul className={css.contactList}>
          <li className={css.contactItem}>
            <HiOutlineDevicePhoneMobile
              className={css.phoneIconFooter}
              style={{ color: darkTheme === 'light' ? '#423d1b' : '#cdcab3' }}
            />
            <a
              href="tel:+380675609482"
              className={css.contactLink}
              aria-label="Подзвонити 067 560 94 82"
            >
              380675609482
            </a>
          </li>
          <li className={css.contactItem}>
            <HiOutlineDevicePhoneMobile
              className={css.phoneIconFooter}
              style={{ color: darkTheme === 'light' ? '#423d1b' : '#cdcab3' }}
            />
            <a
              href="tel:+380964875185"
              className={css.contactLink}
              aria-label="Подзвонити 096 487 51 85"
            >
              0964875185
            </a>
          </li>
        </ul>
      </div>

      <div className={css.btnBoxReservedTablet}>
        <a
          href="tel:+380964875185"
          className={css.btnReservedTablet}
          aria-label="Забронювати відпочинок"
          style={{ color: darkTheme === 'light' ? '#423d1b' : '#423d1b' }}
        >
          {t('btnReserved')}
        </a>
      </div>
    </div>
  );
}

export default FooterContact;
