import './year-block.scss';
import React, {useState, useMemo} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {flightTypesValidation} from '../../types-validation/flight-type-validation';
import {getTimeStatistic, getPlanStatistic} from '../../common';
import {MONTHS, ROUTES, ROUTE_PARAMS_SEPARATOR} from '../../const';

const YearBlock = ({year, allFlights, yearsRange}) => {
  const [currentYear, setCurrentYear] = useState(+year);
  const [flights, setFlights] = useState(allFlights[year]);

  const monthStatistic = useMemo(() => flights.map((monthFlights) => getTimeStatistic(monthFlights)), [flights]);
  const monthPlanStatistic = useMemo(() => flights.map((monthFlights) => getPlanStatistic(monthFlights)), [flights]);
  const yearStatistic = useMemo(() => getTimeStatistic(monthStatistic), [monthStatistic]);
  const yearPlanStatistic = useMemo(() => getPlanStatistic(monthPlanStatistic), [monthPlanStatistic]);
  const yearPath = `${ROUTES.detailPage}${currentYear}`;

  const onYearUpClick = () => {
    if (currentYear < +yearsRange[0]) {
      setFlights(allFlights[currentYear + 1]);
      setCurrentYear(currentYear + 1);
    }
  };

  const onYearDownClick = () => {
    if (currentYear > +yearsRange[yearsRange.length - 1]) {
      setFlights(allFlights[currentYear - 1]);
      setCurrentYear(currentYear - 1);
    }
  };

  return (
    <section className="year-block">
      <h3 className="visually-hidden">{`За ${currentYear}-й год`}</h3>
      <div className="year-block__top-wrapper">
        <div className="year-block__year">
          <Link className="year-block__year-link" to={yearPath} aria-label={`Детально за ${currentYear} год`}>
            {currentYear}
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.4 5.9 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l4.9 5-4.9 5c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5.7-5.6c.4-.5.4-1.1 0-1.6 0 .1 0 .1 0 0Z" fill="currentColor" />
            </svg>
          </Link>
          <span className="year-block__btn-wrapper">
            <button className="year-block__btn" onClick={onYearUpClick} aria-label="Отобразить следующий год">
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.001 16a1 1 0 0 1-.64-.23l-6-5a1.002 1.002 0 0 1 1.28-1.54l5.36 4.48 5.36-4.32a.998.998 0 0 1 1.41.15 1.001 1.001 0 0 1-.14 1.46l-6 4.83a1 1 0 0 1-.63.17Z" fill="currentColor" />
              </svg>
            </button>
            <button className="year-block__btn" onClick={onYearDownClick} aria-label="Отобразить предыдущий год">
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.001 16a1 1 0 0 1-.64-.23l-6-5a1.002 1.002 0 0 1 1.28-1.54l5.36 4.48 5.36-4.32a.998.998 0 0 1 1.41.15 1.001 1.001 0 0 1-.14 1.46l-6 4.83a1 1 0 0 1-.63.17Z" fill="currentColor" />
              </svg>
            </button>
          </span>
        </div>
        <div className="year-block__info-wrapper">
          <p className="year-block__info">
            <span className="year-block__description">налет</span>
            <span>
              {yearStatistic.timeFlight ? <span className="year-block__value year-block__value--fact">{Math.round(yearStatistic.timeFlight / 3600)}</span> : null} {/* {? Время в данных из задания в секундах?} */}
              {yearPlanStatistic.timeFlight ? <span className="year-block__value year-block__value--plan">{`${yearStatistic.timeFlight ? `/` :``}${Math.round(yearPlanStatistic.timeFlight / 3600)}`}</span> : null}
            </span>
          </p>
          <p className="year-block__info">
            <span className="year-block__description">раб.вр.</span>
            <span>
              {yearStatistic.timeWork ? <span className="year-block__value year-block__value--fact">{Math.round(yearStatistic.timeWork / 3600)}</span> : null}
              {yearPlanStatistic.timeWork ? <span className="year-block__value year-block__value--plan">{`${yearStatistic.timeWork ? `/` :``}${Math.round(yearPlanStatistic.timeWork / 3600)}`}</span> : null}
            </span>
          </p>
        </div>
      </div>
      <ul className="year-block__month-list">
        {monthStatistic.map((it, index) => {
          const isPastDate = dayjs().valueOf() > dayjs(`${currentYear}-${index + 1}-1`).valueOf();

          return (
            <li className="year-block__month" key={`${currentYear}-${MONTHS[index]}`}>
              <Link className="year-block__month-name" to={`${yearPath}${ROUTE_PARAMS_SEPARATOR}${index + 1}`} aria-label={`Детально за ${index + 1}.${currentYear}`}>
                {MONTHS[index].slice(0, 3)}
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.4 5.9 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l4.9 5-4.9 5c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5.7-5.6c.4-.5.4-1.1 0-1.6 0 .1 0 .1 0 0Z" fill="currentColor" />
                </svg>
              </Link>
              <span className="year-block__month-description">налет</span>
              <span>
                {it.timeFlight || isPastDate ? <span className="year-block__month-value year-block__month-value--fact">{Math.round(it.timeFlight / 3600)}</span> : null }
                {monthPlanStatistic[index].timeFlight || !isPastDate ? <span className="year-block__month-value year-block__month-value--plan">{`${it.timeFlight || isPastDate ? `/` : ``}${Math.round(monthPlanStatistic[index].timeFlight / 3600)}`}</span> : null}
              </span>
              <span className="year-block__month-description year-block__month-description--work year-block__month-description--desktop">рабочее время</span>
              <span className="year-block__month-description year-block__month-description--work year-block__month-description--mob">раб.время</span>
                <span>
                {it.timeWork || isPastDate ? <span className="year-block__month-value year-block__month-value--fact">{Math.round(it.timeWork / 3600)}</span> : null}
                {monthPlanStatistic[index].timeWork || !isPastDate ? <span className="year-block__month-value year-block__month-value--plan">{`${it.timeWork || isPastDate ? `/` : ``}${Math.round(monthPlanStatistic[index].timeWork / 3600)}`}</span> : null}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

YearBlock.propTypes = {
  year: PropTypes.string.isRequired,
  allFlights: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.arrayOf(flightTypesValidation))),
  yearsRange: PropTypes.arrayOf(PropTypes.string),
};

export default YearBlock;
