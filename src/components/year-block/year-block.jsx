import './year-block.scss';
import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {flightTypesValidation} from '../../types-validation/flight-type-validation';
import {getTimeStatistic} from '../../common';
import {MONTHS, ROUTES} from '../../const';

const YearBlock = ({year, flights}) => {

  // const monthStatistic = flights.map((monthFlights) => getTimeStatistic(monthFlights));
  // const yearStatistic = getTimeStatistic(monthStatistic);
  const monthStatistic = useMemo(() => flights.map((monthFlights) => getTimeStatistic(monthFlights)), [flights]);
  const yearStatistic = useMemo(() => getTimeStatistic(monthStatistic), [monthStatistic]);
  const yearPath = ROUTES.detail + `${year}`;

  return (
    <section className="year-block">
      <h3 className="visually-hidden">{`За ${year}-й год`}</h3>
      <div className="year-block__top-wrapper">
        <Link className="year-block__year" to={yearPath}>
          {year}
          <span className="year-block__icon">
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M1 4L4 0.999998L7 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill="none" d="M1 8L4 11L7 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </Link>
        <div className="year-block__info-wrapper">
          <p className="year-block__info">
            <span className="year-block__description">налет</span>
            <span className="year-block__value">{Math.round(yearStatistic.timeFlight / 3600)}</span>
          </p>
          <p className="year-block__info">
            <span className="year-block__description">рабочее время</span>
            <span className="year-block__value">{Math.round(yearStatistic.timeWork / 3600)}</span>
          </p>
        </div>
      </div>
      <ul className="year-block__month-list">
        {monthStatistic.map((it, index) => {
          return (
            <li className="year-block__month" key={MONTHS[index]}>
              <Link className="year-block__month-name" to={yearPath + `-${index + 1}`}>
                {MONTHS[index]}
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M1 4L4 0.999998L7 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill="none" d="M1 8L4 11L7 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Link>
              <p className="year-block__month-info">
                <span className="year-block__month-description">налет</span>
                <span className="year-block__month-value">{Math.round(it.timeFlight / 3600)}</span>
              </p>
              <p className="year-block__month-info">
                <span className="year-block__month-description">раб. время</span>
                <span className="year-block__month-value">{Math.round(it.timeWork / 3600)}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

YearBlock.propTypes = {
  year: PropTypes.string.isRequired,
  flights: flightTypesValidation,
};

export default YearBlock;
