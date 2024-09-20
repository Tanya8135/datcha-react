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
    <>
      <footer className={css.footer} id="contacts">
        <div className={css.footerContainer}>
          <div className={css.footerBox}>
            <div className={css.logoFooter}>
              <NavLink
                to="/"
                aria-label="На головну"
                className={cssForLogo.logo}
              >
                <img
                  width={200}
                  height={42}
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
    </>
  );
}

export default Footer;
