import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isStatisticGridView: false,
  flightFilter: ``,
  dateMinFilter: ``,
  dateMaxFilter: ``,
  isMobileMenuOpen: false,
};

const viewSlice = createSlice({
  name: `view`,
  initialState,
  reducers: {
    setStatisticGridView(state, action) {
      state.isStatisticGridView = action.payload;
    },
    setFilters(state, action) {
      state.flightFilter = action.payload.flight;
      state.dateMinFilter = action.payload.dateMin;
      state.dateMaxFilter = action.payload.dateMax;
    },
    setMobileMenuOpen(state, action) {
      state.isMobileMenuOpen = action.payload;
    }
  },
});

export const {setStatisticGridView, setFilters, setMobileMenuOpen} = viewSlice.actions;

export default viewSlice.reducer;
