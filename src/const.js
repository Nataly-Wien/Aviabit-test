export const MESSAGES = {
  noData: `Не удалось загрузить данные`,
  noPage: `404 Такой страницы не существует`,
};

export const ROUTES = {
  statistic: '/',
  detail: '/:period',
};

export const MONTHS = [`янв`, `фев`, `мар`, `апр`, `май`, `июн`, `июл`, `авг`, `сен`, `окт`, `ноя`, `дек`];

// export const SLIDER_BREAKPOINTS = {
//   320: {
//     slidesPerView: 1,
//     spaceBetween: 15,
//   },
//   650: {
//     slidesPerView: 1.5,
//     spaceBetween: 20,
//   },
//   1100: {
//     slidesPerView: 2,
//     spaceBetween: 40,
//   },
//   1440: {
//     slidesPerView: 3,
//     spaceBetween: 30,
//   }
// };

export const SLIDER_BREAKPOINTS = {
  320: {
    spaceBetween: 10,
    slidesOffsetAfter: 0,
    initialSlide: 1,
  },
  375: {
    spaceBetween: 10,
    slidesOffsetAfter: 20,
    initialSlide: 1,
  },
  768: {
    spaceBetween: 15,
    slidesOffsetAfter: 40,
    initialSlide: 1,
  },
  1024: {
    spaceBetween: 30,
    slidesOffsetAfter: 40,
    initialSlide: 0,
  }
};

export const SLIDER_A11Y = {
  firstSlideMessage: 'Это первый слайд',
  lastSlideMessage: 'Это последний слайд',
  prevSlideMessage: 'Предыдущий слайд',
  nextSlideMessage: 'Следующий слайд',
};
