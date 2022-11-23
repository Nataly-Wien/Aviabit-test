import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAsyncMockData} from '../mockAPI';
import {getStructuredData} from '../../common';
import {MESSAGES} from '../../const';

const initialState = {
  flights: [],
  structuredFlights: {},
  isLoading: false,
  isError: false,
  errorMessage: ``,
};

export const fetchData = createAsyncThunk(`data/fetchData`,
  async (_, {rejectWithValue}) => {
    try {
      const response = getAsyncMockData().then((data) => JSON.parse(data));

      if (!response) {
        throw new Error(MESSAGES.noData);
      }

      return response;
    }
    catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

const dataSlice = createSlice({
  name: `data`,
  initialState,
  reducers: {
    // increment(state) {
    //   state.count++
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.flights = action.payload;
        state.structuredFlights = getStructuredData(action.payload);
        state.isLoading = false;
        state.isError = false;
        state.errorMessage = ``;
      })
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = ``;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
  },
});

// export const {increment} = dataSlice.actions;

export default dataSlice.reducer;
