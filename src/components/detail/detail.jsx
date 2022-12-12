import './detail.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {flightTypesValidation} from '../../types-validation/flight-type-validation';
import TableHeader from '../table-header/table-header';
import Month from '../month/month';
import Loader from '../loader/loader';
import {MONTHS} from '../../const';

const Detail = ({period, filteredFlights}) => {
  return (
    <div className="detail">
      {filteredFlights.length === 0 ? <Loader /> :
        <ul className="detail__list">
          <TableHeader />
          {filteredFlights.map((it, index) => {
            if (it.length) {
              return (
                <li className="detail__item" key={MONTHS[index]}>
                  <Month flights={it} monthTitle={period.length === 1 ? MONTHS[index][0].toUpperCase() + MONTHS[index].slice(1) : ``} />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      }
    </div>
  );
};

Detail.propTypes = {
  filteredFlights: PropTypes.arrayOf(PropTypes.arrayOf(flightTypesValidation)),
  period: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

export default Detail;
