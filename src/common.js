import dayjs from 'dayjs';

const getSortedFlights = (flights) => flights.sort((a, b) => dayjs(a.dateFlight) - dayjs(b.dateFlight) || a.type - b.type);

export const getFlightsYears = (flights) => Array.from(new Set(flights.map((it) => dayjs(it.dateFlight).year()))).sort((a, b) => a - b);

export const getStructuredData = (flights) => {
  const years = getFlightsYears(flights);
  const data = {};

  years.forEach((year) => {
    data[year] = [];

    for (let month = 0; month < 12; month++) {
      const monthFlights = flights.filter((flight) => dayjs(flight.dateFlight).year() === year && dayjs(flight.dateFlight).month() === month)
      data[year].push(getSortedFlights(monthFlights));
    }
  });

  return data;
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
