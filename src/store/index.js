// import configureStore
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movieSlice';

// buat store : state global
// menyimpan berbagai slice reducer

const store = configureStore({
  // reducer untuk mengelompokan reducer-reducer
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
