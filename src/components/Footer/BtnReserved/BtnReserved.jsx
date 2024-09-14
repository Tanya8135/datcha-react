import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/selectors';

import css from './BtnReserved.module.scss';
import SetSocial from 'components/SetSocial';

function FooterSocial() {
  const darkTheme = useSelector(selectTheme);

  return (
    <div>
      <div className={css.socialFooterContainer}>
        <div className={css.btnBoxReserved}>
          <a
            href="tel:+380964875185"
            className={css.btnReserved}
            style={{ color: darkTheme === 'light' ? '#423d1b' : '#423d1b' }}
            aria-label="Забронювати відпочинок"
          >
            <div className={css.textReserved}>Забронювати</div>
          </a>
        </div>
        <SetSocial iconColor={css.iconFooterColor} />
      </div>
    </div>
  );
}

export default FooterSocial;
