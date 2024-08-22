import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@img/logoDatchaWord.svg';

import css from './HeaderLogo.module.scss';

function HeaderLogo() {
  return (
    <div>
      <div className={css.logoHeader}>
        <NavLink hrefLang='/' className={css.logo}>
          <img src={logo} alt="logo" className={css.logoImg} />
        </NavLink>
      </div>
    </div>
  );
}

export default HeaderLogo;
