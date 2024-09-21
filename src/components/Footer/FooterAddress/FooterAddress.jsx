import { useTranslation } from 'react-i18next';
import css from './FooterAddress.module.scss';
import cssForSubtitle from '../FooterContact/FooterContact.module.scss';
import mapIcon from '@img/logos_google-maps.svg';

function FooterAddress() {
  const { t } = useTranslation();

  return (
    <>
      <address className={css.addressBox}>
        <div className={css.addressText}>
          <p className={cssForSubtitle.subtitleFooter}>
            <b>{t('address')}</b>
          </p>
          <div className={css.mapBox}>
            <a
              href="httSpetific://goo.gl/maps/Yw1rKM6HGrmVK9iBA"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className={css.mapIcon}
              aria-label="Посилання на геоточку"
            >
              <img width="19" height={26} src={mapIcon} alt="map" />
            </a>

            <a
              href="https://goo.gl/maps/Yw1rKM6HGrmVK9iBA"
              target="_blank"
              rel="noopener nofollow noreferrer"
              className={css.addressLink}
              aria-label="Адреса: с. Чкаловка, пров. Набережний 5а"
            >
              {t('alley')} <br />
              с. Чкаловка
            </a>
          </div>
        </div>
      </address>
    </>
  );
}

export default FooterAddress;
