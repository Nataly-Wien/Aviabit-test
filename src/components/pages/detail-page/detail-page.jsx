import React, {useState} from 'react';
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from 'react-redux';
import {selectStructuredFlights} from '../../../store/data/data-selectors';
import Header from '../../header/header';
import Filters from '../../filters/filters';
import Detail from '../../detail/detail';
import Chart from '../../chart/chart';
import SvgIcon from '../../svg-icon/svg-icon';
import {toggleView, convertToMinutes, getSumTimeFlights} from '../../../common';
import {MONTHS, ROUTES, ROUTE_PARAMS_SEPARATOR} from '../../../const';

const DetailPage = () => {
  const [isFilters, setIsFilters] = useState(false);
  const [isChart, setIsChart] = useState(false);
  dayjs.extend(customParseFormat);

  const param = useParams().id;
  const period = param.split(ROUTE_PARAMS_SEPARATOR);

  if (period[1]) {
    period[1] = +period[1] - 1;
  }

  const navigate = useNavigate();

  const dateMin = useSelector((state) => state.view.dateMinFilter);
  const dateMax = useSelector((state) => state.view.dateMaxFilter);
  const flightFilter = useSelector((state) => state.view.flightFilter);
  const allFlights = useSelector(selectStructuredFlights);

  let flights = [];
  let filteredFlights = [];

  if (Object.keys(allFlights).length) {
    const yearFlights = allFlights[period[0]];

    if (!yearFlights || !yearFlights.length) {
      navigate(ROUTES.notFound);
      return;
    }

    flights = period.length > 1 ? yearFlights.slice(period[1], period[1] + 1) : yearFlights;

    if (!flights || !flights.length) {
      navigate(ROUTES.notFound);
      return;
    }

    filteredFlights = flights.map(monthFlights => monthFlights.reduce((filteredFlights, flight) => {
      if ((!flightFilter || (flightFilter && flight.flight === flightFilter)) &&
        ((!dateMin || !dateMax) ||
          ((dateMin && dateMax) && dayjs(flight.dateFlight) >= dayjs(dateMin, `DD.MM.YYYY`)
        && dayjs(flight.dateFlight) <= dayjs(dateMax, `DD.MM.YYYY`).add(1, 'day').subtract(1, 'minute')))) {
        filteredFlights.push({
          ...flight,
          timeFlight: convertToMinutes(flight.timeFlight),
          timeBlock: convertToMinutes(flight.timeBlock),
          timeNight: convertToMinutes(flight.timeNight),
          timeBiologicalNight: convertToMinutes(flight.timeBiologicalNight),
          timeWork: convertToMinutes(flight.timeWork),
        });
      }

      return filteredFlights;
    }, []));
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main-section container">
        <div className="page__title-wrapper">
          <h1 className="page__title">Подробно за&nbsp;{`${period.length > 1 ? `${MONTHS[period[1]]} ` : ``}${period[0]}`}&nbsp;год{`${period.length > 1 ? `а` : ``}`}</h1>
          <div className="page__btn-wrapper">
            <button className="page__btn page__btn--detail page__btn--search" type="button" onClick={toggleView.bind(null, setIsFilters, isFilters)} aria-label="Поиск и фильтрация">
              <SvgIcon name="search" width="20" height="20" />
            </button>
            <button className="page__btn page__btn--detail" type="button" onClick={toggleView.bind(null, setIsChart, isChart)} aria-label="Графическая визуализация">
              <SvgIcon name="chart" width="20" height="20" />
            </button>
          </div>
        </div>
        {isFilters && <Filters period={period} />}
        {isChart ? <Chart flights={getSumTimeFlights([].concat(...filteredFlights))} isFilters={isFilters} /> : <Detail period={period} filteredFlights={filteredFlights} />}
      </main>
    </div >
  );
};

export default DetailPage;
