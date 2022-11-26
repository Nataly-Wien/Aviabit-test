export const MESSAGES = {
  noData: `Не удалось загрузить данные`,
  noPage: `404 Такой страницы не существует`,
};

export const ROUTES = {
  statistic: '/',
  detailPage: '/in/',
  detail: '/in/:id',
  notFound: `/404`,
};

export const ROUTE_PARAMS_SEPARATOR = `-`;

export const MONTHS = [`январь`, `февраль`, `март`, `апрель`, `май`, `июнь`, `июль`, `август`, `сентябрь`, `октябрь`, `ноябрь`, `декабрь`];

// export const PERIOD_TYPE = {
//   year: `year`,
//   month: `month`,
// };

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

export const TABLE_HEADER_DATA = {
  "flight-date": "Дата",
  "flight-time": "Время",
  "flight": "Рейс",
  "pln-type": "Тип судна",
  "pln": "Борт №",
  "time-flight": "Налет",
  "time-block": "Полетное",
  "time-night": "Ночное",
  "time-biological-night": "Био-ночь",
  "time-work": "Рабочее",
  "takeoff-name": "Вылет",
  "takeoff-lat": "Широта",
  "takeoff-long": "Долгота",
  "landing-name": "Посадка",
  "landing-lat": "Широта",
  "landing-long": "Долгота",
};
