import './header.scss';
import React from 'react';

const isMobileMenuOpen = false;

const Header = () => {
  return (
    <header className="header">
      <nav className={`header__main-nav${isMobileMenuOpen ? ` header__main-nav--open` : ``} container`}>
        <div className={`header__logo-wrapper${isMobileMenuOpen ? ` header__logo-wrapper--open` : ``}`}>
          <svg width="100" height="100" viewBox="0 100 1024 837.7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#369" x="283.28" y="233.86" width="451.64" height="459.08" rx="90.23"></rect>
            <path fill="#fff" d="M689,300.64a9.72,9.72,0,0,0-2,0c-6,.41-11.38,2.7-16.77,5a3.79,3.79,0,0,1-3,.18,23.57,23.57,0,0,0-10.41-1.2c-6.25.73-11.52,3.62-16.24,7.55-14,11.69-27.4,24.14-40.69,36.65-24,22.62-47.37,45.94-71,68.93-1.2,1.17-2,1.19-3.4.43C509.73,409.74,494,401.39,478.23,393a2.13,2.13,0,0,0-2.87.28c-3.29,2.9-6.73,5.65-10,8.54a1.8,1.8,0,0,1-2.28.29c-6-2.79-12.09-5.33-18-8.37-2.83-1.47-4.6-1.14-6.79,1-3,3-6.35,5.63-9.71,8.55l25.08,12.11-5.85,5.14,17.92,10.89q14.1,8.55,28.19,17.14c.48.29,1.62.29,1.12,1.44L470.33,472.2C452.86,488,440,499.51,439.39,499.78a4.88,4.88,0,0,1-1.08.33,4.26,4.26,0,0,1-.54,0q-27.21,0-54.41,0a8.35,8.35,0,0,1-3.89-.92Q360.9,490,342.31,480.84c-.62-.31-1.14-.83-2-.45-5.31,2.24-10.65,4.39-16,6.59a4.84,4.84,0,0,0,2,1.29q20.46,10.8,40.95,21.55c.87.46,1.47.85,1.47,2-.05,8.72.1,17.45,0,26.17-.29,19.86-.71,39.72-1.08,59.59,0,.21-.11.5.39.55l13.92-22.86a3.66,3.66,0,0,0,.28-2.16c-.17-11.7-.31-23.39-.55-35.09,0-1.55.38-1.91,1.91-1.93,17.14-.24,34.28-.57,51.42-.88,3.16-.06,3.15-.09,2.74,2.94-.08.61-.12,1.23-.2,1.85-.55,4.3,1.48,6.29,5.78,5.69a53.55,53.55,0,0,0,5.71-1.43,394.44,394.44,0,0,0,40.44-23c11.25-7.31,21.36-14.7,30.36-21.84l2-1.18v45.78l4.67-3.48c.32,33.23.64,66.13,1,99.45,5.48-5.47,10.55-10.64,15.74-15.68a5.46,5.46,0,0,0,1.77-4.21c.2-9.47.51-18.93.72-28.4a3.51,3.51,0,0,1,1.2-2.72c4.18-3.95,8.28-8,12.47-11.94a4.13,4.13,0,0,0,1.42-3.37q0-55-.06-109.94a5.64,5.64,0,0,1,1.81-4.37C601.24,420,640,380.53,678.27,340.54a53.52,53.52,0,0,0,7.67-10.2c4-6.94,7.13-14.25,8-27.33A9.53,9.53,0,0,0,689,300.64Z"></path>
            <path fill="#fff" d="M509.09,558.09h0v0Z"></path>
            <polygon fill="#fff" points="509.1 559.21 509.1 559.21 509.11 559.2 509.1 559.21"></polygon>
            <path fill="#fff" d="M509.1,558.45Z"></path>
            <path fill="#fff" d="M509.14,510.78s0,0-.07,0l0,0Z"></path>
            <path fill="#fff" d="M509.11,511.18l0,0h0Z"></path>
            <polygon fill="#fff" points="509.11 510.07 509.1 510.07 509.1 510.07 509.11 510.07"></polygon>
            <path fill="#fff" d="M509.13,511.91s0,0-.05,0,0,0,0,0Z"></path>
            <path fill="#fff" d="M689,293.73a9.72,9.72,0,0,0-2,0c-6,.41-11.38,2.7-16.77,5a3.83,3.83,0,0,1-3,.19,23.57,23.57,0,0,0-10.41-1.21c-6.25.73-11.52,3.63-16.24,7.56-14,11.69-27.4,24.14-40.69,36.65-24,22.62-47.37,45.94-71,68.93-1.2,1.17-2,1.19-3.4.42-15.71-8.45-31.48-16.8-47.21-25.23a2.12,2.12,0,0,0-2.87.27c-3.29,2.91-6.73,5.65-10,8.54a1.78,1.78,0,0,1-2.28.29c-6-2.78-12.09-5.33-18-8.36-2.83-1.48-4.6-1.14-6.79,1-3,3-6.35,5.62-9.71,8.55l25.08,12.11-5.85,5.14c6.09,3.7,12,7.3,17.92,10.88q14.1,8.57,28.19,17.14c.48.3,1.62.3,1.12,1.45l-24.72,22.19c-17.47,15.82-30.36,27.31-30.94,27.57a4.32,4.32,0,0,1-1.08.33,2.92,2.92,0,0,1-.54.05q-27.21-.06-54.41,0a8.47,8.47,0,0,1-3.89-.92q-18.57-9.24-37.16-18.39c-.62-.3-1.14-.82-2-.44-5.31,2.23-10.65,4.38-16,6.59a4.84,4.84,0,0,0,2,1.29q20.46,10.78,40.95,21.55c.87.45,1.47.85,1.47,2-.05,8.72.1,17.45,0,26.17-.29,19.86-.71,39.72-1.08,59.58,0,.21-.11.51.39.56l13.92-22.86a3.71,3.71,0,0,0,.28-2.17c-.17-11.69-.31-23.39-.55-35.08,0-1.55.38-1.91,1.91-1.93q25.71-.37,51.42-.88c3.16-.06,3.15-.1,2.74,2.94-.08.61-.12,1.23-.2,1.84-.55,4.31,1.48,6.29,5.78,5.69a53.5,53.5,0,0,0,5.71-1.42,392.77,392.77,0,0,0,40.44-23c11.25-7.31,21.36-14.69,30.36-21.84l2-1.17v45.78l4.67-3.48c.32,33.23.64,66.13,1,99.45,5.48-5.48,10.55-10.64,15.74-15.68a5.47,5.47,0,0,0,1.77-4.21c.2-9.47.51-18.94.72-28.4a3.49,3.49,0,0,1,1.2-2.72c4.18-4,8.28-8,12.47-11.94a4.16,4.16,0,0,0,1.42-3.38q0-55-.06-109.94a5.62,5.62,0,0,1,1.81-4.36c38.85-39.4,77.62-78.89,115.88-118.87a53.28,53.28,0,0,0,7.67-10.21c4-6.93,7.13-14.24,8-27.32A9.53,9.53,0,0,0,689,293.73Z"></path>
            <path fill="#fff" d="M981.67,748.84a28.31,28.31,0,0,0-32,21.74q-39.23,0-78.47,0h-2.78a2.78,2.78,0,0,1-1.39-.39,3.11,3.11,0,0,1-.79-.85,7,7,0,0,1-.76-1.28l-1.08-2.13q-37.42-73.53-79-143.36l.48-114.85q35.4,64.14,70.78,128.3c.5,1,1.23,2.43,2.17,4.14a9,9,0,0,0,1.06,1.68l.16.15a3,3,0,0,0,2,.69l4.38.06H872q39.42.09,78.75,0a27.3,27.3,0,0,0,26.69,20.56,28.22,28.22,0,0,0,16.38-5.25,27.88,27.88,0,0,0,6.84-38.78,27.23,27.23,0,0,0-18.06-11.17,28.31,28.31,0,0,0-32,21.74q-39.23,0-78.47,0h-2.78a2.78,2.78,0,0,1-1.39-.39,3.11,3.11,0,0,1-.79-.85,7,7,0,0,1-.76-1.28l-1.08-2.13q-37.61-73.86-79.43-144,.24-55.83.47-111.67l69.37,125.76c.5,1,1.23,2.43,2.18,4.14a8.64,8.64,0,0,0,1,1.68l.16.15a3,3,0,0,0,2,.69l4.37.06h5.7q39.42.09,78.75,0a27.26,27.26,0,0,0,26.68,20.56A28.22,28.22,0,0,0,993,517.33a27.87,27.87,0,0,0,6.84-38.78,27.2,27.2,0,0,0-18.06-11.17,28.31,28.31,0,0,0-32,21.74q-39.21,0-78.47,0h-2.78a2.78,2.78,0,0,1-1.39-.39,3.11,3.11,0,0,1-.79-.85,7,7,0,0,1-.76-1.28l-1.08-2.13q-37-72.62-78-141.61v-33.2A128.42,128.42,0,0,0,658.24,181.39H359.93A128.42,128.42,0,0,0,231.65,309.67v31c0,.75,0,1.5,0,2.25q-41,69-78,141.57l-1.09,2.13a7,7,0,0,1-.75,1.28,3.13,3.13,0,0,1-.8.85,2.75,2.75,0,0,1-1.38.39h-2.79q-39.27-.09-78.46,0a28.33,28.33,0,0,0-32-21.74,27.25,27.25,0,0,0-18.07,11.17,27.88,27.88,0,0,0,6.85,38.78,28.22,28.22,0,0,0,16.38,5.25A27.26,27.26,0,0,0,68.24,502q39.36,0,78.75,0h5.7l4.37-.06a3,3,0,0,0,2-.69l.16-.15a8.64,8.64,0,0,0,1.05-1.68c.95-1.71,1.68-3.14,2.17-4.14L231.76,369.6l.42,111.76q-41.73,70.1-79.34,143.86c-.36.7-.73,1.43-1.08,2.13a7,7,0,0,1-.76,1.28,3.11,3.11,0,0,1-.79.85,2.78,2.78,0,0,1-1.39.39H146q-39.27-.09-78.47,0a28.31,28.31,0,0,0-32-21.74,27.2,27.2,0,0,0-18.06,11.17,27.87,27.87,0,0,0,6.84,38.78,28.22,28.22,0,0,0,16.38,5.25,27.26,27.26,0,0,0,26.68-20.56q39.36,0,78.75,0h5.7l4.37-.06a3,3,0,0,0,2-.69l.16-.15a8.64,8.64,0,0,0,1-1.68c1-1.71,1.68-3.14,2.18-4.14l70.68-128.12.42,114.92q-41.47,69.75-78.89,143.11l-1.08,2.13a7,7,0,0,1-.76,1.28,3.11,3.11,0,0,1-.79.85,2.78,2.78,0,0,1-1.39.39H147q-39.27-.09-78.47,0a28.31,28.31,0,0,0-32-21.74A27.2,27.2,0,0,0,18.48,760a27.87,27.87,0,0,0,6.84,38.78A28.22,28.22,0,0,0,41.7,804a27.26,27.26,0,0,0,26.68-20.56q39.36,0,78.75,0h5.7l4.37-.06a3,3,0,0,0,2-.69l.16-.15a8.64,8.64,0,0,0,1-1.68c1-1.71,1.68-3.14,2.18-4.14l72.49-131.42c13.25,56.72,64.18,99.11,124.87,99.11H658.24c60.7,0,111.66-42.39,124.9-99.12l72.5,131.43c.5,1,1.23,2.43,2.17,4.14a9,9,0,0,0,1.06,1.68l.16.15a3,3,0,0,0,2,.69l4.38.06h5.69q39.42.09,78.75,0A27.3,27.3,0,0,0,976.51,804a28.22,28.22,0,0,0,16.38-5.25A27.88,27.88,0,0,0,999.73,760,27.23,27.23,0,0,0,981.67,748.84ZM757.5,616.16c0,54.59-44.67,99.26-99.26,99.26H359.93c-54.59,0-99.26-44.67-99.26-99.26V309.67c0-54.59,44.67-99.26,99.26-99.26H658.24c54.59,0,99.26,44.67,99.26,99.26Z"></path>
          </svg>
        </div>
        {/* <div className={`header__menu${!isMobileMenuOpen ? ` header__menu--hidden` : ``}`}>
          {isMobileMenuOpen && <button className={"header__close-button"} type="button">
            <span className="visually-hidden">Закрыть меню</span>
          </button>}
          <MainMenu />
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
