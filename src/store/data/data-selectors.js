import {createSelector} from 'reselect';
import {getStructuredData} from '../../common';

const selectFlights = (state) => state.data.flights;

export const selectStructuredFlights = createSelector(selectFlights, (flights) => getStructuredData(flights));
export const selectYears = createSelector(selectStructuredFlights, (flights) => Object.keys(flights).reverse());
