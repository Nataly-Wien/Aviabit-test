import './statistic.scss';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectStructuredFlights, selectYears} from '../../store/data/data-selectors';
import YearBlock from '../year-block/year-block';

const Statistic = () => {
  const flights = useSelector(selectStructuredFlights);
  const years = useSelector(selectYears);

  return (
    <section className="statistic">
      <h2 className="visually-hidden">Общая статистика по годам и месяцам</h2>
      <ul className="statistic__list">
        {years.map((year) => {
          return (
            <li className="statistic__item" key={year}>
              <YearBlock year={year} flights={flights[year]} />
            </li>
          );
        })}
      </ul >
    </section>
  );
};

export default Statistic;
