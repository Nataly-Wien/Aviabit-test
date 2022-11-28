import './flight.scss';
import React, {useState} from 'react';
import {flightTypesValidation} from '../../types-validation/flight-type-validation';
import FlightShort from '../flight-short/flight-short';
import FlightFull from '../flight-full/flight-full';

const Flight = ({flight}) => {
  const [isFullView, setIsFullView] = useState(false);

  return (
    <React.Fragment>
      <button className={`flight__btn ${isFullView ? `flight__btn--full` : ``}`} type="button" onClick={() => setIsFullView(!isFullView)} aria-label="Показать полную информацию о рейсе">
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L4 3.08579L6.29289 0.792893C6.68342 0.402369 7.31658 0.402369 7.70711 0.792893C8.09763 1.18342 8.09763 1.81658 7.70711 2.20711L4.70711 5.20711C4.31658 5.59763 3.68342 5.59763 3.29289 5.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z" fill="currentColor" />
        </svg>
      </button>
      {isFullView ? <FlightFull flight={flight} /> : <FlightShort flight={flight} />}
    </React.Fragment>
  );
};

Flight.propTypes = flightTypesValidation;

export default Flight;
