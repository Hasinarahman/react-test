import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './dragonsSlice';

export const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});
