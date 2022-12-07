import './loader.scss'
import React from 'react';
import SvgIcon from '../svg-icon/svg-icon';

const Loader = () => {
  return (
    <div className="loader">
      <SvgIcon name="loader" width="32" height="32" />
    </div>
  );
};

export default Loader;
