import './filters.scss';
import './flatpickr.min.css';
import React, {useState, useEffect, useRef} from 'react';
import flatpickr from 'flatpickr';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {selectFlightNumbers} from '../../store/data/data-selectors';
import {setFilters} from '../../store/view/view-slice';
import SvgIcon from '../svg-icon/svg-icon';
import {DATE_PATTERN, EMPTY_FILTERS} from '../../const';

const Filters = ({period}) => {
  const pickr = useRef(null);

  const [flight, setFlight] = useState(``);
  const [date, setDate] = useState(``);

  const flightNumbers = useSelector(selectFlightNumbers);

  const dispatch = useDispatch();

  const setAllFilters = () => {
    const dates = date.match(DATE_PATTERN);

    dispatch(setFilters({
      flight: flight,
      dateMin: dates ? dates[0] : ``,
      dateMax: !dates ? `` : dates[1] ? dates[1] : dates[0],
    }));
  };

  const clearFilters = () => {
    setFlight(``);
    setDate(``);
    dispatch(setFilters(EMPTY_FILTERS));
  }

  useEffect(() => {
    const calender = flatpickr(pickr.current, {
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

  useEffect(() => {
    pickr.current.value = date;
  });

  useEffect(() => {
    return () => {
      dispatch(setFilters(EMPTY_FILTERS));
    }
  }, [dispatch]);

  return (
    <div className="filters">
      <div className="filters__wrapper">
        <label className="filters__label" htmlFor="date">Дата рейса:</label>
        <div className="filters__input-wrapper">
          <input ref={pickr} type="text" value={date} id="date" onInput={(evt) => setDate(`с ${evt.target.value.replace(`to`, `по`)}`)} />
          <span className="filters__calender" aria-label="Открыть календарь для выбора даты">
            <SvgIcon name="calender" width="30" height="30" />
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
        <button className="filters__btn" type="button" onClick={setAllFilters}>Применить</button>
        <button className="filters__btn" type="button" onClick={clearFilters}>Сбросить</button>
      </div>
    </div>
  );
};

Filters.propTypes = {
  period: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

export default Filters;
