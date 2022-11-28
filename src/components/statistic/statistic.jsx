import './statistic.scss';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectStructuredFlights, selectYears} from '../../store/data/data-selectors';
import SwiperView from '../swiper-view/swiper-view';
import GridView from '../grid-view/grid-view';

const Statistic = () => {
  const flights = useSelector(selectStructuredFlights);
  const years = useSelector(selectYears);
  const isGridView = useSelector((state) => state.view.isStatisticGridView);

  return (
    <section className={`statistic ${isGridView ? ` statistic--flex` : ``}`}>
      <h2 className="visually-hidden">Общая статистика по годам и месяцам</h2>
      {isGridView ? <GridView flights={flights} years={years} /> : <SwiperView flights={flights} years={years} />}
      <div className={`statistic__gradient-block${isGridView ? ` statistic__gradient-block--hidden` : ``}`}></div>
    </section>
  );
};

export default Statistic;
