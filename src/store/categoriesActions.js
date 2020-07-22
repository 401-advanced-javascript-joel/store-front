import axios from 'axios';

export const getCategories = () => async (dispatch) => {
  let results = await axios.get(
    'https://joel-express-server.herokuapp.com/api/v1/categories',
  );
  dispatch(initialCategoires(results.data.results));
};

const initialCategoires = (payload) => {
  return {
    type: 'GET_CATEGORIES',
    payload,
  };
};

export const setCurrentCategory = (payload) => {
  return {
    type: 'SET_CURRENT_CATEGORY',
    payload,
  };
};

export const reset = () => {
  return {
    type: 'RESET_STORE',
  };
};
