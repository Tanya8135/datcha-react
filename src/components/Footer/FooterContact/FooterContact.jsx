import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';

import css from './FooterContact.module.scss';

function FooterContact() {
  return (
    <div>
      <div className={css.contactBox}>
        <p className={css.subtitleFooter}>
          <b>Контакти</b>
        </p>

        <ul className={css.contactList}>
          <li className={css.contactItem}>
            <HiOutlineDevicePhoneMobile className={css.phoneIconFooter} />
            <a href="tel:+380675609482" className={css.contactLink}>
              380675609482
            </a>
          </li>
          <li className={css.contactItem}>
            <HiOutlineDevicePhoneMobile className={css.phoneIconFooter} />
            <a href="tel:+380964875185" className={css.contactLink}>
              0964875185
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterContact;
