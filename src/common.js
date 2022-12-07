import dayjs from 'dayjs';

const getSortedFlights = (flights) => flights
  .sort((a, b) => dayjs(a.dateFlight) - dayjs(b.dateFlight) || a.type - b.type);

export const getFlightsYears = (flights) => Array.from(new Set(flights.map((it) => dayjs(it.dateFlight).year()))).sort((a, b) => a - b);

const alphanumericSortRule = (a, b) => a.replace(/[0-9-]/g, ``) === b.replace(/[0-9-]/g, ``) ?
  a.replace(/[a-z-]/ig, ``) - b.replace(/[a-z-]/ig, ``) :
  a.replace(/[0-9-]/g, ``) > b.replace(/[0-9-]/g, ``) ? 1 : -1;

export const getFlightsNumbers = (flights) => Array.from(new Set(flights.map((it) => it.flight)))
  .sort((a, b) => alphanumericSortRule(a, b));

export const convertToHours = (time) => Math.round(time / 3600);
export const convertToMin = (time) => Math.round(time / 60);

export const getHourMin = (time) => {
  const hours = Math.trunc(time / 60);
  const mins = (`00` + (time - (hours * 60))).slice(-2);

  // return `${hours}′ ${mins}″`;
  return `${hours}:${mins}`;
};

export const getStructuredData = (flights) => {
  const years = getFlightsYears(flights);
  const data = {};

  years.forEach((year) => {
    data[year] = [];

    for (let month = 0; month < 12; month++) {
      const monthFlights = flights.filter((flight) => dayjs(flight.dateFlight).year() === year && dayjs(flight.dateFlight).month() === month);
      data[year].push(getSortedFlights(monthFlights));
    }
  });

  return data;
};

export const getMinMaxDates = (flights) => {
  const date = {
    min: dayjs().valueOf(),
    max: dayjs().valueOf(),
  };

  flights.forEach((it) => {
    if (dayjs(it.dateFlight) > date.max) {
      date.max = dayjs(it.dateFlight);
    }

    if (dayjs(it.dateFlight) < date.min) {
      date.min = dayjs(it.dateFlight);
    }
  });

  return date;
};

export const getTimeStatistic = (flights) => flights.filter((item) => item.type === 0).reduce((sum, it) => ({
  timeFlight: sum.timeFlight + it.timeFlight,
  timeWork: sum.timeWork + it.timeWork,
  type: 0,
}), {
  timeFlight: 0,
  timeWork: 0,
  type: 0,
});

export const getPlanStatistic = (flights) => flights.filter((item) => item.type === 1).reduce((sum, it) => ({
  timeFlight: sum.timeFlight + it.timeFlight,
  timeWork: sum.timeWork + it.timeWork,
  type: 1,
}), {
  timeFlight: 0,
  timeWork: 0,
  type: 1,
});

export const isLocalStorageAvailable = () => {
  const test = 'test';

  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

export const toggleView = (setter, value) => {
  setter(!value);
  };
