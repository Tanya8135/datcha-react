import { LuInstagram } from 'react-icons/lu';
import { RiFacebookFill } from 'react-icons/ri';
import { BsTelegram } from 'react-icons/bs';

import css from './FooterSocial.module.scss';

function FooterSocial() {
  return (
    <div>
      <div className={css.socialFooterContainer}>
        <div className={css.btnBoxReserved}>
          <a href="tel:+380964875185" className={css.btnReserved}>
            Забронювати
          </a>
        </div>

        <ul className={css.socialFooter}>
          <li className={css.socialFooterItem}>
            <a
              href="https://www.instagram.com/baza_vidpochynku_kr?igsh=MXNrcDZ1cWwzZXNhbQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <LuInstagram className={css.footerIconColor} />
            </a>
          </li>
          <li className={css.socialFooterItem}>
            <a
              href="https://www.facebook.com/datcha.afalina"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <RiFacebookFill className={css.footerIconColor} />
            </a>
          </li>
          <li className={css.socialFooterItem}>
            <a
              href="https://t.me/datcha_bv"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <BsTelegram className={css.footerIconColor} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterSocial;
