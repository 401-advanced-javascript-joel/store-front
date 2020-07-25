import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

// everything in rtk is a "slice" of the global state object
const productsSlice = createSlice({
  name: 'products',

  initialState: { products: [], currentProduct: {}, processing: false },

  reducers: {
    process: (state, action) => {
      state.processing = !state.processing;
    },
    loadProducts: (state, action) => {
      const { payload } = action;
      state.products = payload;
    },
    loadOneProduct: (state, action) => {
      const { payload } = action;
      state.currentProduct = payload;
    },
    add: (state, action) => {
      const { payload } = action;
      let atIndex = state.products.findIndex(
        (product) => product._id === payload._id,
      );
      if (atIndex > -1) {
        let product = state.products[atIndex];
        product.inStock = product.inStock - 1;
        state.products = [
          ...state.products.slice(0, atIndex),
          product,
          ...state.products.slice(atIndex + 1),
        ];
      }
    },
    remove: (state, action) => {
      const { payload } = action;
      let atIndex = state.products.findIndex(
        (product) => product._id === payload._id,
      );
      if (atIndex > -1) {
        let product = state.products[atIndex];
        product.inStock = product.inStock + payload.quantity;
        state.products = [
          ...state.products.slice(0, atIndex),
          product,
          ...state.products.slice(atIndex + 1),
        ];
      }
    },
  },
});

export const {
  process,
  loadProducts,
  loadOneProduct,
  add,
  remove,
} = productsSlice.actions;

export const getProducts = () => async (dispatch) => {
  let results = await axios.get(
    'https://joel-express-server.herokuapp.com/api/v1/products',
  );
  dispatch(loadProducts(results.data.results));
};

export const getOneProduct = (id) => async (dispatch) => {
  let results = await axios.get(
    `https://joel-express-server.herokuapp.com/api/v1/products/${id}`,
  );
  dispatch(loadOneProduct(results.data));
};

export const addToCart = (product) => async (dispatch) => {
  dispatch(process());
  let results = await axios.put(
    `https://joel-express-server.herokuapp.com/api/v1/products/${product._id}`,
    {
      ...product,
      inStock: product.inStock - 1,
    },
  );
  dispatch(add(results.data));
  dispatch(process());
};

export const removeFromCart = (product) => async (dispatch) => {
  dispatch(process());
  await axios.put(
    `https://joel-express-server.herokuapp.com/api/v1/products/${product._id}`,
    {
      ...product,
      inStock: product.inStock + product.quantity,
    },
  );
  dispatch(remove(product));
  dispatch(process());
};

export default productsSlice.reducer;
