export const initCategories = {
  categories: [],
  currentCategory: '',
};

const reducer = (state = initCategories, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: payload,
        currentCategory: payload[0].name,
      };
    case 'SET_CURRENT_CATEGORY':
      return { ...state, currentCategory: payload };
    default:
      return state;
  }
};

export default reducer;
