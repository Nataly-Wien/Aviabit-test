import dayjs from "dayjs";

const standardData = {  // Эталонные данные
  "dateFlight": "2017-06-21T19:00:00.000Z", // Дата рейса
  "flight": "AB-3377", // Номер рейса
  "plnType": "B-757-200", // Тип воздушного судна
  "pln": "XXXAK", // Бортовой номер воздушного судна
  "timeFlight": 26100, // Время налета (с момента взлета до посадки)
  "timeBlock": 27000, // Полетное время (время налета + руление и работа двигателя на земле)
  "timeNight": 16200, // Ночное летное время (является частью налета)
  "timeBiologicalNight": 28200, // Биологическая ночь
  "timeWork": 37800, // Рабочее время (полетное время + предполетная и послеполетная подготовка)
  "type": 0, // Тип записи (0 - фактический налет, 1 - плановый)
  "takeoff": {
    "name": "Томск(Богашево)", // Аэропорт вылета
    "lat": 56.38333333, // Широта
    "long": 85.2 // Долгота
  },
  "landing": {
    "name": "Нячанг(Камрань Интл)", // Аэропорт посадки
    "lat": 11.99805555, // Широта
    "long": 109.21944444 // Долгота
  }
};

const DATA_LENGTH = 100;

const DATE_MIN = 1483218000000;  //01.01.2017
const DATE_MAX = 1704056340000;  //31.12.2023
const DATE_PLAN_MIN = 1654030800000;  //01.06.2022  - с этой даты по вчерашний день генерируются и плановые, и фактические данные
const DATE_PLAN_MAX = dayjs().valueOf() - 24 * 3600 * 1000;  // Вчера

const TIME_ROUND_INTERVAL = 5 * 60 * 1000;  // для округления случ. времени рейса до 5 мин
const DATE_PLAN_INTERVAL = 180 * 24 * 3600 * 1000;  // для получения плановых и фактических значений за последние полгода

const PLAN_TYPES_NUMBER = 7;
const PLAN_TYPES = [`SSJ-100`, `A-320`, `A-321`, `A-330-200`, `A-330-300`, `B-737-800`, `B-777-300ER`];

const AC_NUMBER = 10;
const AC_REGISTRATIONS = [`XXXAK`, `XXXAA`, `XXXOP`, `XXXAE`, `XXXAC`, `XXXTA`, `XXXTM`, `XXXMA`, `XXXMP`, `XXXEO`];

const FLIGHT_PREFIX = `AB-`;
const FLIGHT_MAX_NUM = 9999;
const FLIGHT_TEMPLATE = `0000`;

const FLIGHT_TIME_STANDARD_DIVERGENCE = 0.2;  // Максимальное расхождение случайных и эталонных данных времени полета - 20%

const AIRPORTS = [
  {
    name: `Вена(Швехат)`,
    lat: 46.11,
    long: 16.569444,
  },
  {
    name: `Минск(Минск 2)`,
    lat: 53.8825,
    long: 28.032222,
  },
  {
    name: `Брюссель(Брюссель)`,
    lat: 50.901111,
    long: 4.484444,
  },
  {
    name: `Варна(Варна)`,
    lat: 43.231667,
    long: 43.231667,
  },
  {
    name: `Париж(Шарль-де-Голль)`,
    lat: 49.009722,
    long: 2.5475,
  },
  {
    name: `Берлин(Шёнефельд)`,
    lat: 52.378611,
    long: 52.378611,
  },
  {
    name: `Сеул(Инчхон)`,
    lat: 37.47,
    long: 126.45,
  },
  {
    name: `Салоники(Салоники)`,
    lat: 40.519444,
    long: 40.519444,
  },
  {
    name: `Будапешт(им.Ференца Листа)`,
    lat: 47.439167,
    long: 47.439167,
  },
  {
    name: `Дубай(Дубай)`,
    lat: 25.2525,
    long: 55.364444,
  },
  {
    name: `Лондон(Хитроу,)`,
    lat: 51.477222,
    long: 0.461389,
  },
  {
    name: `Стамбул(Стамбул)`,
    lat: 41.2588,
    long: 28.7455,
  },
  {
    name: `Нячанг(Камрань Интл)`,
    lat: 11.99805555,
    long: 109.21944444,
  },
  {
    name: `Калининград(Храброво)`,
    lat: 54.89,
    long: 20.594722,
  },
  {
    name: `Москва(Шереметьево)`,
    lat: 55.971389,
    long: 37.414722,
  },
  {
    name: `Москва(Внуково)`,
    lat: 55.598333,
    long: 55.598333,
  },
  {
    name: `Санкт-Петербург(Пулково)`,
    lat: 59.799722,
    long: 30.265,
  },
  {
    name: `Нижний Новгород(Стригино)`,
    lat: 56.229722,
    long: 56.229722,
  },
  {
    name: `Новосибирск(Толмачёво)`,
    lat: 55.011389,
    long: 82.651667,
  },
  {
    name: `Сочи(Сочи)`,
    lat: 43.445,
    long: 39.948056,
  },
  {
    name: `Екатеринбург(Кольцово)`,
    lat: 56.743056,
    long: 60.804722,
  },
  {
    name: `Томск(Богашево)`,
    lat: 56.38333333,
    long: 85.2,
  },
];

const getRandomInRange = (max, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRound = (num, limit = 100) => Math.floor(num / limit) * limit;

const getMock = () => {

  const randomDate = Math.random() < 0.5 ? getRandomInRange(DATE_MAX, DATE_MIN) : getRandomInRange(DATE_PLAN_MAX, DATE_PLAN_MIN);
  const randomAirport = getRandomInRange(AIRPORTS.length) - 1;

  const timeFlightStandard = standardData[`timeFlight`];

  const getMockFlightTime = (value) => {  //  С заданным отклонением от полученного случайного
    const difference = timeFlightStandard - value;
    const mock = difference > 0 ? getRandomInRange(timeFlightStandard, timeFlightStandard - difference) : getRandomInRange(timeFlightStandard - difference, timeFlightStandard);

    return getRound(mock);
   };

  return {
    "dateFlight": new Date(Math.floor(randomDate / TIME_ROUND_INTERVAL) * TIME_ROUND_INTERVAL).toISOString(), // Дата-время рейса, округление до 5 мин
    "flight": FLIGHT_PREFIX + (FLIGHT_TEMPLATE + getRandomInRange(FLIGHT_MAX_NUM)).slice(-FLIGHT_TEMPLATE.length),  // Четырехзначный с ведущими нулями
    "plnType": PLAN_TYPES[getRandomInRange(PLAN_TYPES_NUMBER) - 1],  // Из списка
    "pln": AC_REGISTRATIONS[getRandomInRange(AC_NUMBER) - 1],  // Из списка
    "timeFlight": getRound(getRandomInRange(timeFlightStandard + timeFlightStandard * FLIGHT_TIME_STANDARD_DIVERGENCE, timeFlightStandard - timeFlightStandard * FLIGHT_TIME_STANDARD_DIVERGENCE)),
    "timeBlock": getMockFlightTime(standardData[`timeBlock`]),
    "timeNight": getMockFlightTime(standardData[`timeNight`]),
    "timeBiologicalNight": getMockFlightTime(standardData[`timeBiologicalNight`]),
    "timeWork": getMockFlightTime(standardData[`timeWork`]),
    "type": randomDate > dayjs().valueOf() ? 1 : dayjs().valueOf() - randomDate > DATE_PLAN_INTERVAL ? 0 : +(Math.random() < 0.5), // План - позже сегодняшней даты, факт - раньше чем полгода назад, , между - и то, и то
    "takeoff": AIRPORTS[randomAirport],  // Из списка
    "landing": AIRPORTS[AIRPORTS.length - randomAirport - 1],  // Другой из списка
  }
};

export const getMocks = () => {
  const data = [];

  for (let i = 0; i < DATA_LENGTH; i++) {
    data.push(getMock())
  }

  return data;
};
