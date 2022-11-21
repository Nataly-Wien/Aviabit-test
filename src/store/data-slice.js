import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getAsyncMockData} from './mockAPI';
import {adaptDataToClient} from '../common';
import {MESSAGES} from '../const';

const initialState = {
  flights: [],
  loading: false,
  error: ``,
};

export const fetchData = createAsyncThunk(`data/fetchData`,
  async (_, {rejectWithValue}) => {
    try {
      const response = getAsyncMockData().then((data) => JSON.parse(data).map(adaptDataToClient));

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
        state.loading = false;
        state.error = ``;
      })
      .addMatcher(fetchData.pending, (state) => {
        state.loading = true;
        state.error = ``;
      })
      .addMatcher(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

// export const {increment} = dataSlice.actions;

export default dataSlice.reducer;
