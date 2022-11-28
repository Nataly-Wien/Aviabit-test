import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/a11y';
import './swiper-view.scss';
import React from 'react';
import {Navigation, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import PropTypes from 'prop-types';
import {flightTypesValidation} from '../../types-validation/flight-type-validation';
import YearBlock from '../year-block/year-block';
import {SLIDER_BREAKPOINTS, SLIDER_A11Y} from '../../const';

const SwiperView = ({flights, years}) => {
  return (
    <Swiper modules={[Navigation, A11y]} slidesPerView={`auto`} breakpoints={SLIDER_BREAKPOINTS} navigation a11y={SLIDER_A11Y} preventClicks={false} preventClicksPropagation={false}>
      {years.map((year) => {
        return (
          <SwiperSlide key={year}>
            {/* <div> */}
              <YearBlock year={year} allFlights={flights} yearsRange={years} />
            {/* </div> */}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

SwiperView.propTypes = {
  allFlights: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.arrayOf(flightTypesValidation))),
  yearsRange: PropTypes.arrayOf(PropTypes.string),
};

export default SwiperView;
