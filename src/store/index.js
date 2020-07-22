import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import cartReducer from './cartReducer';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';

let reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
};

const store = () =>
  createStore(
    combineReducers(reducers),
    composeWithDevTools(applyMiddleware(thunk)),
  );

export default store();
