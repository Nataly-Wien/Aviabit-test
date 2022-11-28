import './main-menu.scss';
import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import {MENU_ITEMS} from '../../const';

const MainMenu = () => {

  const isMobileMenuOpen = useSelector((state) => state.view.isMobileMenuOpen);

  return (
    <ul className={`main-menu${isMobileMenuOpen ? ` main-menu--open` : ``}`}>
      {MENU_ITEMS.map((item) => {
        return (
          <li className="main-menu__item" key={`${item.name}`}>
            <Link className="main-menu__link" to={item.link}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
