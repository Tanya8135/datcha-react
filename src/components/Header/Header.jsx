import React from 'react';

import css from './Header.module.scss';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import ThemeToggle from 'components/ThemeToggle';
import LanguageToggle from 'components/LanguageToggle';

function Header() {
  return (
    <header>
      <div className={css.header}>
        <HeaderLogo />
        <div className={css.headerBox}>
          <div className={css.themeToggle}>
            <ThemeToggle />
          </div>
          <div className={css.lngToggle}>
            <LanguageToggle />
          </div>

          <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
