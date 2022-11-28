import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isStatisticGridView: false,
  flightFilter: ``,
  dateMinFilter: ``,
  dateMaxFilter: ``,
};

const viewSlice = createSlice({
  name: `view`,
  initialState,
  reducers: {
    setStatisticGridView(state, action) {
      state.isStatisticGridView = action.payload;
    },
    setFlightFilter(state, action) {
      state.flightFilter = action.payload;
    },
    setDateMinFilter(state, action) {
      state.dateMinFilter = action.payload;
    },
    setDateMaxFilter(state, action) {
      state.dateMaxFilter = action.payload;
    },
  },
});

export const {setStatisticGridView, setFlightFilter, setDateMinFilter, setDateMaxFilter} = viewSlice.actions;

export default viewSlice.reducer;
