import './statistic.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/a11y';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectStructuredFlights, selectYears} from '../../store/data/data-selectors';
import {Navigation, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import YearBlock from '../year-block/year-block';
import {SLIDER_BREAKPOINTS, SLIDER_A11Y} from '../../const';

const Statistic = () => {
  const flights = useSelector(selectStructuredFlights);
  const years = useSelector(selectYears);

  return (
    <section className="statistic">
      <h2 className="visually-hidden">Общая статистика по годам и месяцам</h2>
      {/* <Swiper modules={[Navigation, A11y]} navigation breakpoints={SLIDER_BREAKPOINTS} a11y={SLIDER_A11Y}> */}
      <Swiper modules={[Navigation, A11y]} slidesPerView={`auto`} breakpoints={SLIDER_BREAKPOINTS} navigation a11y={SLIDER_A11Y}>
        {years.map((year) => {
          return (
            <SwiperSlide key={year}>
              <div className="statistic__item">
                <YearBlock year={year} allFlights={flights} yearsRange={years} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="statistic__gradient-block"></div>
    </section>
  );
};

export default Statistic;
