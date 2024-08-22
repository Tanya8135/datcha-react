import { NavLink } from 'react-router-dom';

import css from './Footer.module.scss';
import cssForLogo from '../Header/HeaderLogo/HeaderLogo.module.scss';
import logo from '@img/logoDatchaWord.svg';

function Footer() {
  return (
    <div>
      <footer className={css.footer} id="contacts">
        <div className={css.footerContainer}>
          <div className={css.footerBox}>
            <div className={css.logoFooter}>
              <NavLink>
                <img src={logo} alt="logo" className={cssForLogo.logoImg} />
              </NavLink>
            </div>

            {/* Content fot contact*/}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
