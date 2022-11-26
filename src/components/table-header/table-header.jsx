import './table-header.scss';
import React from 'react';
import {TABLE_HEADER_DATA} from '../../const';

const TableHeader = () => {
  return (
    <li className="table-header">
      {Object.entries(TABLE_HEADER_DATA).map((it) => {
        return (
          <span className={`table-header__cell ${it[0]}`} key={it[0]}>{it[1]}</span>
        )
      })}
    </li>
  );
};

export default TableHeader;
