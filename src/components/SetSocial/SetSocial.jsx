import { LuInstagram } from 'react-icons/lu';
import { RiFacebookFill } from 'react-icons/ri';
import { BsTelegram } from 'react-icons/bs';

import css from './SetSocial.module.scss';

function SetSocial({ iconColor }) {
  return (
    <div>
      <ul className={css.socialHeroSet}>
        <li className={css.socialHeroSetItem}>
          <a
            href="https://www.instagram.com/baza_vidpochynku_kr?igsh=MXNrcDZ1cWwzZXNhbQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <LuInstagram className={iconColor} />
          </a>
        </li>
        <li className={css.socialHeroSetItem}>
          <a
            href="https://www.facebook.com/datcha.afalina"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <RiFacebookFill className={iconColor} />
          </a>
        </li>
        <li className={css.socialHeroSetItem}>
          <a
            href="https://t.me/datcha_bv"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <BsTelegram className={iconColor} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SetSocial;
