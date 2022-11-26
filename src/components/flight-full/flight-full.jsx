import React from 'react';
import dayjs from "dayjs";
import {flightTypesValidation} from '../../types-validation/flight-type-validation';

const FlightFull = ({flight}) => {
  return (
    <div>
      <div className="flight-full__info-wrapper">
        <span className="flight-full__">
          {dayjs(flight.dateFlight).format('DD.MM.YY')}
        </span>
        <span className="flight-full__">
          {dayjs(flight.dateFlight).format('HH:mm')}
        </span>
        <span className="flight-full__">
          {flight.flight}
        </span>
        <span className="flight-full__">
          {flight.plnType}
        </span>
        <span className="flight-full__">
          {flight.pln}
        </span>
      </div>
      <div className="flight-full__data-wrapper">
        <span className="flight-full__">
          <svg></svg>
          {flight.timeFlight}
        </span>
        <span className="flight-full__">
          <svg></svg>
          {flight.timeBlock}
        </span>
        <span className="flight-full__">
          <svg></svg>
          {flight.timeNight}
        </span>
        <span className="flight-full__">
          <svg></svg>
          {flight.timeBiologicalNight}
        </span>
        <span className="flight-full__">
          <svg></svg>
          {flight.timeWork}
        </span>
      </div>
      <div className="flight-full__airport-wrapper">
        <span className="flight-full__">
          <svg></svg>
          {flight.takeoff.name}
        </span>
        <span className="flight-full__">
          <svg></svg>
          {flight.takeoff.lat}
        </span>
        <span className="flight-full__">
          <svg></svg>
          {flight.takeoff.long}
        </span>
        <span className="flight-full__">
          <svg></svg>
          {flight.landing.name}
        </span>
        <span className="flight-full__">
          <svg></svg>
          {flight.landing.lat}
        </span>
        <span className="flight-full__">
          <svg></svg>
          {flight.landing.long}
        </span>
      </div>
    </div>
  );
};

FlightFull.propTypes = flightTypesValidation;

export default FlightFull;
