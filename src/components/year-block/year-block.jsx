import './year-block.scss';
import React, {useState, useMemo} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {flightTypesValidation} from '../../types-validation/flight-type-validation';
import SvgIcon from '../svg-icon/svg-icon';
import {getTimeStatistic, getPlanStatistic, convertToHours} from '../../common';
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
            <SvgIcon name="arrow-right" width="8" height="14" />
          </Link>
          <span className="year-block__btn-wrapper">
            <button className="year-block__btn" onClick={onYearUpClick} type="button" aria-label="Отобразить следующий год">
              <SvgIcon name="arrow-down" width="24" height="24"/>
            </button>
            <button className="year-block__btn" onClick={onYearDownClick} type="button" aria-label="Отобразить предыдущий год">
              <SvgIcon name="arrow-down" width="24" height="24"/>
            </button>
          </span>
        </div>
        <div className="year-block__info-wrapper">
          <p className="year-block__info">
            <span className="year-block__description">налет</span>
            <span>
              {yearStatistic.timeFlight ? <span className="year-block__value year-block__value--fact">{convertToHours(yearStatistic.timeFlight)}</span> : null}
              {yearPlanStatistic.timeFlight ? <span className="year-block__value year-block__value--plan">{`${yearStatistic.timeFlight ? `/` :``}${convertToHours(yearPlanStatistic.timeFlight)}`}</span> : null}
            </span>
          </p>
          <p className="year-block__info">
            <span className="year-block__description">раб.вр.</span>
            <span>
              {yearStatistic.timeWork ? <span className="year-block__value year-block__value--fact">{convertToHours(yearStatistic.timeWork)}</span> : null}
              {yearPlanStatistic.timeWork ? <span className="year-block__value year-block__value--plan">{`${yearStatistic.timeWork ? `/` :``}${convertToHours(yearPlanStatistic.timeWork)}`}</span> : null}
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
                <SvgIcon name="arrow-right" width="8" height="14" />
              </Link>
              <span className="year-block__month-description">налет</span>
              <span>
                {it.timeFlight || isPastDate ? <span className="year-block__month-value year-block__month-value--fact">{convertToHours(it.timeFlight)}</span> : null }
                {monthPlanStatistic[index].timeFlight || !isPastDate ? <span className="year-block__month-value year-block__month-value--plan">{`${it.timeFlight || isPastDate ? `/` : ``}${convertToHours(monthPlanStatistic[index].timeFlight)}`}</span> : null}
              </span>
              <span className="year-block__month-description year-block__month-description--work year-block__month-description--desktop">рабочее время</span>
              <span className="year-block__month-description year-block__month-description--work year-block__month-description--mob">раб.время</span>
                <span>
                {it.timeWork || isPastDate ? <span className="year-block__month-value year-block__month-value--fact">{convertToHours(it.timeWork)}</span> : null}
                {monthPlanStatistic[index].timeWork || !isPastDate ? <span className="year-block__month-value year-block__month-value--plan">{`${it.timeWork || isPastDate ? `/` : ``}${convertToHours(monthPlanStatistic[index].timeWork)}`}</span> : null}
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
