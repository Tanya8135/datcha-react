import PropTypes from 'prop-types';
import { LuInstagram } from 'react-icons/lu';
import { RiFacebookFill } from 'react-icons/ri';
import { BsTelegram } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/selectors';

import css from './SetSocial.module.scss';

function SetSocial({ iconColor }) {
  const darkTheme = useSelector(selectTheme);

  return (
    <>
      <ul className={css.socialSet}>
        <li className={css.socialSetItem}>
          <a
            href="https://www.instagram.com/baza_vidpochynku_kr?igsh=MXNrcDZ1cWwzZXNhbQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className={css.linkSetSocial}
            aria-label="Перейти до Instagram"
          >
            <LuInstagram
              className={iconColor}
              style={{ color: darkTheme === 'light' ? '#423d1b' : '#cdcab3' }}
            />
          </a>
        </li>
        <li className={css.socialSetItem}>
          <a
            href="https://www.facebook.com/datcha.afalina"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className={css.linkSetSocial}
            aria-label="Перейти на Facebook"
          >
            <RiFacebookFill
              className={iconColor}
              style={{ color: darkTheme === 'light' ? '#423d1b' : '#cdcab3' }}
            />
          </a>
        </li>
        <li className={css.socialSetItem}>
          <a
            href="https://t.me/datcha_bv"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className={css.linkSetSocial}
            aria-label="Перейти на Telegram"
          >
            <BsTelegram
              className={iconColor}
              style={{ color: darkTheme === 'light' ? '#423d1b' : '#cdcab3' }}
            />
          </a>
        </li>
      </ul>
    </>
  );
}

SetSocial.propTypes = {
  iconColor: PropTypes.string.isRequired,
};

export default SetSocial;
