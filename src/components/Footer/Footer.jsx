import { NavLink } from 'react-router-dom';

import css from './Footer.module.scss';
import cssForLogo from '../Header/HeaderLogo/HeaderLogo.module.scss';
import logo from '@img/logoDatchaWord.svg';

import FooterContact from './FooterContact';
import FooterAddress from './FooterAddress/FooterAddress';
import FooterSocial from './FooterSocial';

function Footer() {
  return (
    <div>
      <footer className={css.footer} id="contacts">
        <div className={css.footerContainer}>
          <div className={css.footerBox}>
            <div className={css.logoFooter}>
              <NavLink to="/datcha-react">
                <img src={logo} alt="logo" className={cssForLogo.logoImg} />
              </NavLink>
            </div>

            <FooterContact />
            <FooterAddress />
          </div>
          <FooterSocial />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
