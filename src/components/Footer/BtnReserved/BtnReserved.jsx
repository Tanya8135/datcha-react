import css from './BtnReserved.module.scss';
import SetSocial from 'components/SetSocial';

function FooterSocial() {
  return (
    <div>
      <div className={css.socialFooterContainer}>
        <div className={css.btnBoxReserved}>
          <a href="tel:+380964875185" className={css.btnReserved}>
            Забронювати
          </a>
        </div>
        <SetSocial iconColor={css.iconFooterColor}/>
      </div>
    </div>
  );
}

export default FooterSocial;
