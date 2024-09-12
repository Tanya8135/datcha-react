import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/selectors';

import css from './Footer.module.scss';
import cssForLogo from '../Header/HeaderLogo/HeaderLogo.module.scss';
import logo from '@img/logoDatchaWord.svg';
import logoDark from '@img/logoDatchaWordLight.svg';

import FooterContact from './FooterContact';
import FooterAddress from './FooterAddress/FooterAddress';
import BtnReserved from './BtnReserved';

function Footer() {
  const darkTheme = useSelector(selectTheme);

  return (
    <div>
      <footer className={css.footer} id="contacts">
        <div className={css.footerContainer}>
          <div className={css.footerBox}>
            <div className={css.logoFooter}>
              <NavLink to="/datcha-react" className={cssForLogo.logo}>
                <img
                  src={darkTheme === 'dark' ? logoDark : logo}
                  alt="logo"
                  className={cssForLogo.logoImg}
                />
              </NavLink>
            </div>

            <FooterContact />
            <FooterAddress />
          </div>
          <BtnReserved />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
