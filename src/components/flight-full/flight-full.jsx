import './flight-full.scss';
import React from 'react';
import dayjs from "dayjs";
import {flightTypesValidation} from '../../types-validation/flight-type-validation';

const FlightFull = ({flight}) => {
  return (
    <div className="flight-full">
      <p className="flight-full__wrapper">
        {flight.type ? <span className="flight-full__data flight-full__data--plan">По&nbsp;плану&nbsp;на&nbsp;</span> : null}
        <span className="flight-full__data">
          {dayjs(flight.dateFlight).format('DD.MM.YY')},&nbsp;&nbsp;
        </span>
        <span className="flight-full__data">
          {dayjs(flight.dateFlight).format('HH:mm')}
        </span>
      </p>
      <p className="flight-full__wrapper">рейс&nbsp;
        <span className="flight-full__data">
          {flight.flight}
        </span>,&ensp;на&nbsp;
        <span className="flight-full__data">
          {flight.plnType}
        </span>&ensp;бортовой&nbsp;номер&nbsp;
        <span className="flight-full__data">
          {flight.pln}
        </span>
      </p>
      <p className="flight-full__wrapper">из&nbsp;
        <span className="flight-full__data">
          {flight.takeoff.name}&ensp;
        </span>шир.&nbsp;
        <span className="flight-full__data">
          {flight.takeoff.lat}
        </span>,&nbsp;&nbsp;дол.&nbsp;
        <span className="flight-full__data">
          {flight.takeoff.long}&ensp;
        </span>в&nbsp;
        <span className="flight-full__data">
          {flight.landing.name}&ensp;
        </span>шир.&nbsp;
        <span className="flight-full__data">
          {flight.landing.lat}
        </span>,&nbsp;&nbsp;дол.&nbsp;
        <span className="flight-full__data">
          {flight.landing.long}
        </span>
      </p>
      <p className="flight-full__wrapper">время&nbsp;налета&nbsp;-&nbsp;
        <span className="flight-full__data">
          {flight.timeFlight},&ensp;
        </span>полетное&nbsp;-&nbsp;
        <span className="flight-full__data">
          {flight.timeBlock},&ensp;
        </span>ночное&nbsp;летное&nbsp;-&nbsp;
        <span className="flight-full__data">
          {flight.timeNight},&ensp;
        </span>биологичекая&nbsp;ночь&nbsp;-&nbsp;
        <span className="flight-full__data">
          {flight.timeBiologicalNight},&ensp;
        </span>рабочее&nbsp;время&nbsp;-&nbsp;
        <span className="flight-full__data">
          {flight.timeWork}
        </span>
      </p>
    </div>
  );
};

FlightFull.propTypes = flightTypesValidation;

export default FlightFull;
