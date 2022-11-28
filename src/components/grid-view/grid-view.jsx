import './grid-view.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {flightTypesValidation} from '../../types-validation/flight-type-validation';
import YearBlock from '../year-block/year-block';

const GridView = ({flights, years}) => {
  return (
    <ul className="grid-view">
      {years.map((year) => {
        return (
          <li className="grid-view__item" key={year}>
            <YearBlock year={year} allFlights={flights} yearsRange={years} />
          </li>
        );
      })}
    </ul >
  );
};

GridView.propTypes = {
  allFlights: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.arrayOf(flightTypesValidation))),
  yearsRange: PropTypes.arrayOf(PropTypes.string),
};

export default GridView;
