import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../redux/selectors';

import logo from '@img/logoDatchaWord.svg';
import logoDark from '@img/logoDatchaWordLight.svg';

import css from './HeaderLogo.module.scss';

function HeaderLogo() {
  const darkTheme = useSelector(selectTheme);

  return (
    <div>
      <div className={css.logoHeader}>
        <NavLink to="/" className={css.logo}>
          <img
            src={darkTheme === 'dark' ? logoDark : logo}
            alt="logo"
            className={css.logoImg}
          />
        </NavLink>
      </div>
    </div>
  );
}

export default HeaderLogo;
