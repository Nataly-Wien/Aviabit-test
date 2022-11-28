import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Header from '../../header/header';
import Filters from '../../filters/filters';
import Detail from '../../detail/detail';
import {MONTHS, ROUTE_PARAMS_SEPARATOR} from '../../../const';

const DetailPage = () => {
  const [isFilters, seIsFilters] = useState(false);
  const [isChart, seIsChart] = useState(false);

  const param = useParams().id;
  const period = param.split(ROUTE_PARAMS_SEPARATOR);

  if (period[1]) {
    period[1] = +period[1] - 1;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main-section container">
        <div className="page__title-wrapper">
          <h1 className="page__title">Подробно за&nbsp;{`${period.length > 1 ? `${MONTHS[period[1]]} ` : ``}${period[0]}`}&nbsp;год{`${period.length > 1 ? `а` : ``}`}</h1>
          <div className="page__btn-wrapper">
            <button className="page__btn page__btn--detail" type="button" onClick={() => seIsFilters(!isFilters)} aria-label="Поиск и фильтрация">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 10.8858 15.2543 12.5974 14.0417 13.8561C14.0073 13.8825 13.9743 13.9114 13.9428 13.9429C13.9113 13.9744 13.8824 14.0074 13.856 14.0417C12.5974 15.2543 10.8858 16 9 16C5.13401 16 2 12.866 2 9ZM14.6176 16.0319C13.078 17.2635 11.125 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 11.125 17.2635 13.0781 16.0319 14.6177L19.707 18.2929C20.0975 18.6834 20.0975 19.3166 19.707 19.7071C19.3165 20.0976 18.6833 20.0976 18.2928 19.7071L14.6176 16.0319Z" fill="currentColor" />
              </svg>
            </button>
            <button className="page__btn page__btn--detail" type="button" onClick={() => seIsChart(!isChart)} aria-label="Графическая визуализация">
              <svg fill="none" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 17.351562 5.179688 C 17.640625 5.105469 17.894531 5.285156 17.917969 5.582031 L 18.308594 10.222656 C 18.332031 10.519531 18.160156 10.621094 17.925781 10.453125 L 12.757812 6.789062 C 12.519531 6.621094 12.558594 6.425781 12.847656 6.351562 Z M 17.351562 5.179688 " fill="currentColor" />
                <path d="M 4.101562 15.378906 C 3.921875 15.378906 3.738281 15.320312 3.589844 15.199219 C 3.242188 14.914062 3.191406 14.40625 3.472656 14.0625 L 7.945312 8.570312 C 8.203125 8.246094 8.664062 8.179688 9.011719 8.402344 L 12.601562 10.75 L 16.421875 6.019531 C 16.699219 5.671875 17.207031 5.617188 17.554688 5.898438 C 17.902344 6.179688 17.957031 6.6875 17.675781 7.035156 L 13.394531 12.335938 C 13.136719 12.660156 12.671875 12.730469 12.324219 12.503906 L 8.734375 10.15625 L 4.726562 15.085938 C 4.566406 15.277344 4.335938 15.378906 4.101562 15.378906 Z M 4.101562 15.378906 " fill="currentColor" />
                <path d="M 0.984375 18.734375 C 0.550781 18.734375 0.199219 18.382812 0.199219 17.949219 L 0.199219 2.050781 C 0.199219 1.617188 0.550781 1.265625 0.984375 1.265625 C 1.421875 1.265625 1.773438 1.617188 1.773438 2.050781 L 1.773438 17.949219 C 1.773438 18.382812 1.421875 18.734375 0.984375 18.734375 Z M 0.984375 18.734375 " fill="currentColor" />
                <path d="M 19.015625 18.734375 L 0.984375 18.734375 C 0.550781 18.734375 0.199219 18.382812 0.199219 17.949219 C 0.199219 17.515625 0.550781 17.160156 0.984375 17.160156 L 19.011719 17.160156 C 19.445312 17.160156 19.796875 17.511719 19.796875 17.945312 C 19.796875 18.378906 19.449219 18.734375 19.015625 18.734375 Z M 19.015625 18.734375 " fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
        {isFilters && <Filters period={period} />}
        {isChart ? <div>Будет график</div> : <Detail period={period} />}
      </main>
    </div >
  );
};

export default DetailPage;
