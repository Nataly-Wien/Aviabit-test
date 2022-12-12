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
    slidesOffsetAfter: 30,
    initialSlide: 1,
  },
  1024: {
    spaceBetween: 30,
    slidesOffsetAfter: 30,
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
  "flight-name": "Рейс",
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

export const CHART_LEGEND_DATA = [
  {name: `flight`, text: `Налет`,},
  {name: `block`, text: `Полетное`,},
  {name: `night`, text: `Ночное`,},
  {name: `biological`, text: `Био-ночь`,},
  {name: `work` , text: `Рабочее`,},
];

export const MENU_ITEMS = [
  {
    name: `Пункт меню 1`,
    link: `#`,
  },
  {
    name: `Пункт меню 2`,
    link: `#`,
  },
  {
    name: `Пункт меню 3`,
    link: `#`,
  },
];

export const DATE_PATTERN = /(?<=[со] )\d{2}\.\d{2}\.\d{4}/g;

export const EMPTY_FILTERS = {
  flight: ``,
  dateMin: ``,
  dateMax: ``,
};

export const CHART_MARGIN = {
  top: 10,
  right: 20,
  bottom: 60,
  left: 90,
};
