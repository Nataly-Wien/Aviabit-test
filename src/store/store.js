import {configureStore} from '@reduxjs/toolkit';
import dataReducer from './data/data-slice';
import viewReducer from './view/view-slice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    view: viewReducer,
  },
});
