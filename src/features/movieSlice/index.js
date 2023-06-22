// import createSlice
import { createSlice } from '@reduxjs/toolkit';
import data from '../../components/utils/constants/data';

// buat slice: untuk ganerate action dan reducer menerima param object -> name, inisialstate, reducers
const movieSlice = createSlice({
  name: 'Movies Slice',
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      state.movies.push(action.payload);
    },
    deleteMovie() {},
    updateMovie() {},
  },
});

// generate action dan reducer
const moviesReducer = movieSlice.reducer;
const { addMovie, deleteMovie } = movieSlice.actions;

// export action dan reduser
export default moviesReducer;
export { addMovie, deleteMovie };
