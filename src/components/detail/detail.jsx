import './detail.scss';
import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
import {useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import {selectStructuredFlights} from '../../store/data/data-selectors';
import PropTypes from 'prop-types';
import TableHeader from '../table-header/table-header';
import Month from '../month/month';
import Loader from '../loader/loader';
import {convertToMin} from '../../common';
import {MONTHS, ROUTES} from '../../const';

const Detail = ({period}) => {
  const navigate = useNavigate();

  dayjs.extend(customParseFormat);

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
            ((dateMin && dateMax) && dayjs(flight.dateFlight) >= dayjs(dateMin, `DD.MM.YYYY`) && dayjs(flight.dateFlight) <= dayjs(dateMax, `DD.MM.YYYY`)))) {
        filteredFlights.push({
          ...flight,
          timeFlight: convertToMin(flight.timeFlight),
          timeBlock: convertToMin(flight.timeBlock),
          timeNight: convertToMin(flight.timeNight),
          timeBiologicalNight: convertToMin(flight.timeBiologicalNight),
          timeWork: convertToMin(flight.timeWork),
        });
      }

      return filteredFlights;
     }, []));
  }

  return (
    <div className="detail">
      {filteredFlights.length === 0 ? <Loader /> :
        <ul className="detail__list">
          <TableHeader />
          {filteredFlights.map((it, index) => {
            if (it.length) {
              return (
                <li className="detail__item" key={MONTHS[index]}>
                  <Month flights={it} monthTitle={period.length === 1 ? MONTHS[index][0].toUpperCase() + MONTHS[index].slice(1) : ``} />
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      }
    </div>
  );
};

Detail.propTypes = {
  period: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

export default Detail;
