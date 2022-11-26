import './month.scss';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {flightTypesValidation} from '../../types-validation/flight-type-validation';
import Flight from '../flight/flight';

const Month = ({flights, monthTitle}) => {
  const [isFullView, setIsFullView] = useState(true);


  return (
    <section className="month">
      {monthTitle && <h2 className="month__title">
        {monthTitle}
        <button className={`month__btn${isFullView ? ` month__btn--full-view` : ``}`} onClick={() => setIsFullView(!isFullView)}>
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.001 16a1 1 0 0 1-.64-.23l-6-5a1.002 1.002 0 0 1 1.28-1.54l5.36 4.48 5.36-4.32a.998.998 0 0 1 1.41.15 1.001 1.001 0 0 1-.14 1.46l-6 4.83a1 1 0 0 1-.63.17Z" fill="currentColor" />
          </svg>
        </button>
      </h2>}
      {isFullView && <ul className="month__list">
        {flights.map((it, index) => {
          return (
            <li className={`month__item${index % 2 ? ` month__item--odd` : ``}`} key={`${it.dateFlight}-${it.type}-${index}`}>
              <Flight flight={it} />
            </li>
          )
        })}
      </ul>}
    </section>
  );
};

Month.propTypes = {
  flights: PropTypes.arrayOf(flightTypesValidation),
  monthTitle: PropTypes.string,
};

export default Month;
