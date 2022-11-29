import './filters.scss';
import './flatpickr.min.css';
import React, {useState, useEffect} from 'react';
import flatpickr from 'flatpickr';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {selectFlightNumbers} from '../../store/data/data-selectors';
import {setFlightFilter, setDateMinFilter, setDateMaxFilter} from '../../store/view/view-slice';

const Filters = ({period}) => {
  const [flight, setFlight] = useState(``);
  const [date, setDate] = useState(``);

  const dateRegexp = /(?<=[co] )\d{2}\.\d{2}\.\d{4}/g;

  const flightNumbers = useSelector(selectFlightNumbers);

  const dispatch = useDispatch();

  const setFilters = () => {
    const dates = date.match(dateRegexp);

    dispatch(setDateMinFilter(dates ? dates[0] : ``));
    dispatch(setDateMaxFilter(dates ? dates[1] : ``));
    dispatch(setFlightFilter(flight));
  };

  const clearFilters = () => {
    setFlight(``);
    setDate(``);
    dispatch(setDateMinFilter(``));
    dispatch(setDateMaxFilter(``));
    dispatch(setFlightFilter(``));
  }

  useEffect(() => {
    const calender = flatpickr(`#date`, {
      mode: "range",
      dateFormat: `d.m.Y`,
      minDate: period[1] ? `01.${(`0` + (period[1] + 1)).slice(-2)}.${period[0]}` : `01.01.${period[0]}`,
      maxDate: period[1] ? `01.${(`0` + (period[1] + 2)).slice(-2)}.${period[0]}` : `31.12.${period[0]}`,
      enableTime: false,
    });

    if (period[1]) {
      calender.changeMonth(period[1], false);
    } else {
      calender.changeMonth(0, false);
    }

    return () => {
      calender.destroy();
    };
  }, [period]);


  return (
    <div className="filters">
      <div className="filters__wrapper">
        <label className="filters__label" htmlFor="date">Дата рейса:</label>
        <div className="filters__input-wrapper">
          <input type="text" value={date} id="date" onInput={(evt) => setDate(`c ${evt.target.value.replace(`to`, `пo`)}`)}/>
          <span className="filters__calender" aria-label="Открыть календарь для выбора даты">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
              <path d="M 12.550781 21.367188 L 17.449219 21.367188 L 17.449219 25.042969 L 12.550781 25.042969 Z M 12.550781 21.367188 " fill="currentColor" />
              <path d="M 12.550781 15.488281 L 17.449219 15.488281 L 17.449219 19.164062 L 12.550781 19.164062 Z M 12.550781 15.488281 " fill="currentColor" />
              <path d="M 5.199219 21.367188 L 10.097656 21.367188 L 10.097656 25.042969 L 5.199219 25.042969 Z M 5.199219 21.367188 " fill="currentColor" />
              <path d="M 5.199219 15.488281 L 10.097656 15.488281 L 10.097656 19.164062 L 5.199219 19.164062 Z M 5.199219 15.488281 " fill="currentColor" />
              <path d="M 19.898438 21.367188 L 24.796875 21.367188 L 24.796875 25.042969 L 19.898438 25.042969 Z M 19.898438 21.367188 " fill="currentColor" />
              <path d="M 19.898438 15.488281 L 24.796875 15.488281 L 24.796875 19.164062 L 19.898438 19.164062 Z M 19.898438 15.488281 " fill="currentColor" />
              <path d="M 12.550781 9.609375 L 17.449219 9.609375 L 17.449219 13.285156 L 12.550781 13.285156 Z M 12.550781 9.609375 " fill="currentColor" />
              <path d="M 5.199219 9.609375 L 10.097656 9.609375 L 10.097656 13.285156 L 5.199219 13.285156 Z M 5.199219 9.609375 " fill="currentColor" />
              <path d="M 19.898438 9.609375 L 24.796875 9.609375 L 24.796875 13.285156 L 19.898438 13.285156 Z M 19.898438 9.609375 " fill="currentColor" />
              <path d="M 27.25 2.75 L 24.796875 2.75 L 24.796875 1.523438 C 24.796875 0.789062 24.308594 0.300781 23.574219 0.300781 C 22.839844 0.300781 22.351562 0.789062 22.351562 1.523438 L 22.351562 2.746094 L 16.222656 2.746094 L 16.222656 1.523438 C 16.222656 0.789062 15.734375 0.300781 15 0.300781 C 14.265625 0.300781 13.777344 0.789062 13.777344 1.523438 L 13.777344 2.746094 L 7.648438 2.746094 L 7.648438 1.523438 C 7.648438 0.789062 7.160156 0.300781 6.425781 0.300781 C 5.691406 0.300781 5.203125 0.789062 5.203125 1.523438 L 5.203125 2.746094 L 2.75 2.746094 C 1.527344 2.746094 0.300781 3.972656 0.300781 5.199219 L 0.300781 27.25 C 0.300781 28.472656 1.523438 29.699219 2.75 29.699219 L 27.253906 29.699219 C 28.476562 29.699219 29.703125 28.476562 29.703125 27.25 L 29.703125 5.199219 C 29.699219 3.976562 28.476562 2.75 27.25 2.75 Z M 27.25 27.25 L 2.75 27.25 L 2.75 5.199219 L 5.203125 5.199219 L 5.203125 6.421875 C 5.203125 7.15625 5.691406 7.648438 6.425781 7.648438 C 7.160156 7.648438 7.648438 7.15625 7.648438 6.421875 L 7.648438 5.199219 L 13.777344 5.199219 L 13.777344 6.421875 C 13.777344 7.15625 14.265625 7.648438 15 7.648438 C 15.734375 7.648438 16.222656 7.15625 16.222656 6.421875 L 16.222656 5.199219 L 22.351562 5.199219 L 22.351562 6.421875 C 22.351562 7.15625 22.839844 7.648438 23.574219 7.648438 C 24.308594 7.648438 24.796875 7.15625 24.796875 6.421875 L 24.796875 5.199219 L 27.25 5.199219 Z M 27.25 27.25 " fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>
      <div className="filters__wrapper">
        <label className="filters__label" htmlFor="flight">Номер рейса:</label>
        <select id="flight" value={flight} onChange={(evt) => setFlight(evt.target.value)}>
          <option value="">Выберите рейс</option>
          {flightNumbers.map((it, index) => {
            return (
              <option value={it} key={`${it}-${index}`}>{it}</option>
            );
          })}
        </select>
      </div>
      <div className="filters__btn-wrapper">
        <button className="filters__btn" type="button" onClick={setFilters}>Применить</button>
        <button className="filters__btn" type="button" onClick={clearFilters}>Сбросить</button>
      </div>
    </div>
  );
};

Filters.propTypes = {
  period: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

export default Filters;
