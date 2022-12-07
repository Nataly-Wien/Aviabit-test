import './month.scss';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {flightTypesValidation} from '../../types-validation/flight-type-validation';
import Flight from '../flight/flight';
import SvgIcon from '../svg-icon/svg-icon';
import {toggleView} from '../../common';

const Month = ({flights, monthTitle}) => {
  const [isFullView, setIsFullView] = useState(true);

  return (
    <section className="month">
      {monthTitle && <h2 className="month__title" onClick={toggleView.bind(null, setIsFullView, isFullView)}>
        {monthTitle}
        <button className={`month__btn${isFullView ? ` month__btn--full-view` : ``}`} onClick={toggleView.bind(null, setIsFullView, isFullView)} aria-label="Показать/скрыть месяц">
          <SvgIcon name="arrow-down" width="24" height="24" />
        </button>
      </h2>}
      {isFullView && <ul className="month__list">
        {flights.map((it, index) => {
          return (
            <li className={`month__item flight${index % 2 ? ` month__item--odd` : ``}`} key={`${it.dateFlight}-${it.type}-${index}`}>
              <Flight flight={it} />
            </li>
          )
        })}
      </ul>}
    </section>
  );
};

Month.propTypes = {
  flights: PropTypes.arrayOf(flightTypesValidation),
  monthTitle: PropTypes.string,
};

export default Month;
