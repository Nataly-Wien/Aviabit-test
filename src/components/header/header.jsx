import './header.scss';
import React from 'react';
import {useSelector} from 'react-redux';
import MainMenu from '../main-menu/main-menu';
import SvgIcon from '../svg-icon/svg-icon';

const Header = () => {
  const isMobileMenuOpen = useSelector((state) => state.view.isMobileMenuOpen);

  return (
    <header className="header">
      <nav className={`header__main-nav${isMobileMenuOpen ? ` header__main-nav--open` : ``} container`}>
        <div className={`header__logo-wrapper${isMobileMenuOpen ? ` header__logo-wrapper--open` : ``}`}>
          <SvgIcon name="logo" width="100" height="100" />
        </div>
        <MainMenu />
      </nav>
    </header>
  );
}

export default Header;
