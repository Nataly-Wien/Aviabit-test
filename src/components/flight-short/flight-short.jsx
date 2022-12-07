import './flight-short.scss';
import '../table-header/table-header.scss';
import React from 'react';
import dayjs from "dayjs";
import {flightTypesValidation} from '../../types-validation/flight-type-validation';
import SvgIcon from '../svg-icon/svg-icon';
import {getHourMin} from '../../common';

const FlightShort = ({flight}) => {
  return (
    <div className={`flight-short ${flight.type ? ` flight-short--plan` : ``}`}>
      <div className="flight-short__wrapper flight-short__wrapper--info">
        <span className="flight-short__data flight-date">
          {dayjs(flight.dateFlight).format('DD.MM.YY')}
        </span>
        <span className="flight-short__data flight-time">
          {dayjs(flight.dateFlight).format('HH:mm')}
        </span>
        <span className="flight-short__data flight-name">
          {flight.flight}
        </span>
        <span className="flight-short__data pln-type">
          {flight.plnType}
        </span>
        <span className="flight-short__data pln">
          {flight.pln}
        </span>
      </div>
      <div className="flight-short__wrapper flight-short__wrapper--data">
        <span className="flight-short__data time-flight">
          <SvgIcon name="time-flight" width="30" height="30"/>
          {getHourMin(flight.timeFlight)}
        </span>
        <span className="flight-short__data time-block">
          <SvgIcon name="time-block" width="30" height="30"/>
          {getHourMin(flight.timeBlock)}
        </span>
        <span className="flight-short__data time-night">
          <SvgIcon name="time-night" width="30" height="30"/>
          {getHourMin(flight.timeNight)}
        </span>
        <span className="flight-short__data time-biological-night">
          <SvgIcon name="time-biological-night" width="30" height="30"/>
          {getHourMin(flight.timeBiologicalNight)}
        </span>
        <span className="flight-short__data time-work">
          <SvgIcon name="time-work" width="30" height="30"/>
          {getHourMin(flight.timeWork)}
        </span>
      </div>
      <div className="flight-short__wrapper flight-short__wrapper--place">
        <span className="flight-short__data takeoff-name">
          <SvgIcon name="takeoff" width="30" height="30"/>
          {flight.takeoff.name}
        </span>
        <span className="flight-short__data takeoff-lat">
          {flight.takeoff.lat}
        </span>
        <span className="flight-short__data takeoff-long">
          {flight.takeoff.long}
        </span>
        <span className="flight-short__data landing-name">
          <SvgIcon name="landing" width="30" height="24" />
          {flight.landing.name}
        </span>
        <span className="flight-short__data landing-lat">
          {flight.landing.lat}
        </span>
        <span className="flight-short__data landing-long">
          {flight.landing.long}
        </span>
      </div>
    </div>
  );
};

FlightShort.propTypes = flightTypesValidation;

export default FlightShort;
