import React from 'react';
import Icons from '../svg-sprite/sprite.svg';

const SvgIcon = ({name, width, height}) => {
  return (
    <svg width={width} height={height} >
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>
  );
};

export default SvgIcon;
