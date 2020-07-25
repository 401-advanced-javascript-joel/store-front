import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

// everything in rtk is a "slice" of the global state object
const categoriesSlice = createSlice({
  name: 'categories',

  initialState: { categories: [], currentCategory: '' },

  reducers: {
    setCurrentCategory: (state, action) => {
      const { payload } = action;
      state.currentCategory = payload;
    },
    loadCategories: (state, action) => {
      const { payload } = action;
      state.categories = payload;
      state.currentCategory = payload[0].name;
    },
  },
});

export const { setCurrentCategory, loadCategories } = categoriesSlice.actions;

export const getCategories = () => async (dispatch) => {
  let results = await axios.get(
    'https://joel-express-server.herokuapp.com/api/v1/categories',
  );
  dispatch(loadCategories(results.data.results));
};

export default categoriesSlice.reducer;
