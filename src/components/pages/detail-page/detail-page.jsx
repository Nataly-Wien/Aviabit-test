import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Header from '../../header/header';
import Filters from '../../filters/filters';
import Detail from '../../detail/detail';
import SvgIcon from '../../svg-icon/svg-icon';
import {toggleView} from '../../../common';
import {MONTHS, ROUTE_PARAMS_SEPARATOR} from '../../../const';

const DetailPage = () => {
  const [isFilters, setIsFilters] = useState(false);
  // const [isChart, setIsChart] = useState(false);

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
            <button className="page__btn page__btn--detail page__btn--search" type="button" onClick={toggleView.bind(null, setIsFilters, isFilters)} aria-label="Поиск и фильтрация">
              <SvgIcon name="search" width="20" height="20" />
            </button>
            {/* <button className="page__btn page__btn--detail" type="button" onClick={toggleView.bind(null, setIsChart, isChart)} aria-label="Графическая визуализация">
              <SvgIcon name="chart" width="20" height="20" />
            </button> */}
          </div>
        </div>
        {isFilters && <Filters period={period} />}
        {/* {isChart ? <div>Будет график</div> : <Detail period={period} />} */}
        <Detail period={period} />
      </main>
    </div >
  );
};

export default DetailPage;
