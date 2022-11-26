import './detail.scss';
import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux';
import {selectStructuredFlights} from '../../store/data/data-selectors';
import PropTypes from 'prop-types';
import TableHeader from '../table-header/table-header';
import Month from '../month/month';
import Loader from '../loader/loader';
import {MONTHS, ROUTES} from '../../const';

const Detail = ({period}) => {
  const navigate = useNavigate();
  const allFlights = useSelector(selectStructuredFlights);
  let flights = [];

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
  }

  return (
    <div className="detail">
      {flights.length === 0 ? <Loader /> :
        <ul className="detail__list">
          <TableHeader />
          {flights.map((it, index) => {
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
  period: PropTypes.arrayOf(PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.number,
    ]
  )),
};

export default Detail;
