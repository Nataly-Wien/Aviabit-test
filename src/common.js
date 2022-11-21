import dayjs from 'dayjs';

export const adaptDataToClient = (flight) => {
  const clientFlight = {
    ...flight,
    timestamp: dayjs(flight.dateFlight).valueOf(),
  };

  return clientFlight;
};

export const getFlightsYearsInterval = (flights) => {
  const flightDates = flights.map((it) => it.timestamp / 1000);

  return {
    firstYear: dayjs.unix(Math.min(...flightDates)).year(),
    lastYear: dayjs.unix(Math.max(...flightDates)).year(),
  }
};

export const getFlightsYears = (flights) => Array.from(new Set(flights.map((it) => dayjs(it.timestamp).year())));

export const getSortedFlights = (flights) => flights.map((it) => it.timestamp).sort((a, b) => a.timestamp - b.timestamp);
