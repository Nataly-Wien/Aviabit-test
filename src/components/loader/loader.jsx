import './loader.scss'
import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.5 16C30.5 13.7118 29.9584 11.456 28.9196 9.41714C27.8808 7.3783 26.3741 5.61426 24.5229 4.26926" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default Loader;
