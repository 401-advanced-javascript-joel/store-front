const initState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  currentCategory: 'electronics',
};

const reducer = (state, action) => {
  if (!state) {
    state = initState;
  }
  let newState = { ...state };

  switch (action.type) {
    case 'SET_CURRENT_CATEGORY':
      newState.currentCategory = action.payload;
      break;
    case 'RESET_STORE':
      newState = initState;
      break;
    default:
      break;
  }

  return newState;
};

export default reducer;
