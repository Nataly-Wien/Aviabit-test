import React from 'react';
import {useParams} from "react-router-dom";
import Header from '../../header/header';
import Detail from '../../detail/detail';
import {MONTHS, ROUTE_PARAMS_SEPARATOR} from '../../../const';

const DetailPage = () => {
  const param = useParams().id;
  const period = param.split(ROUTE_PARAMS_SEPARATOR);

  if (period[1]) {
    period[1] = +period[1] - 1;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main-section container">
        <h1 className="page__title">{`Детальная информация за ${period.length > 1 ? `${MONTHS[period[1]]} ` : ``}${period[0]} год${period.length > 1 ? `а` : ``}`}</h1>
        <Detail period={period} />
      </main>
    </div >
  );
};

export default DetailPage;
