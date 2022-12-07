import './main-menu.scss';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {setMobileMenuOpen} from '../../store/view/view-slice';
import {Link} from 'react-router-dom';
import {MENU_ITEMS} from '../../const';

const MainMenu = () => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.view.isMobileMenuOpen);

  const setMenuView = () => {
    dispatch(setMobileMenuOpen(!isMobileMenuOpen));
  };

  return (
    <div className="main-menu">
      <button className={`main-menu__btn${isMobileMenuOpen ? ` main-menu__btn--open` : ``}`} type="button" aria-label="Меню сайта" onClick={setMenuView}>
        <span></span>
      </button>
      <ul className={`main-menu__list${isMobileMenuOpen ? ` main-menu__list--open` : ``}`}>
        {MENU_ITEMS.map((item) => {
          return (
            <li className="main-menu__item" key={`${item.name}`}>
              <Link className="main-menu__link" to={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainMenu;
