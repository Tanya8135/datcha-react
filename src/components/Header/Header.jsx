import React from 'react';

import css from './Header.module.scss';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';
import ThemeToggle from 'components/ThemeToggle';

function Header() {
  return (
    <header>
      <div className={css.header}>
        <HeaderLogo />
        <HeaderNav />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
