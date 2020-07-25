import axios from 'axios';

export const getProducts = () => async (dispatch) => {
  let results = await axios.get(
    'https://joel-express-server.herokuapp.com/api/v1/products',
  );
  dispatch(realGetProducts(results.data.results));
};

const realGetProducts = (payload) => {
  return {
    type: 'GET_PRODUCTS',
    payload,
  };
};

export const getOneProduct = (id) => async (dispatch) => {
  let results = await axios.get(
    `https://joel-express-server.herokuapp.com/api/v1/products/${id}`,
  );
  dispatch(realGetOneProduct(results.data));
};

const realGetOneProduct = (payload) => {
  return {
    type: 'GET_ONE_PRODUCT',
    payload,
  };
};

export const addToCart = (product) => async (dispatch) => {
  let results = await axios.put(
    `https://joel-express-server.herokuapp.com/api/v1/products/${product._id}`,
    {
      ...product,
      inStock: product.inStock - 1,
    },
  );
  dispatch(realAddToCart(results.data));
};

const realAddToCart = (payload) => {
  return {
    type: 'ADD_TO_CART',
    payload,
  };
};

export const removeFromCart = (product) => async (dispatch) => {
  await axios.put(
    `https://joel-express-server.herokuapp.com/api/v1/products/${product._id}`,
    {
      ...product,
      inStock: product.inStock + product.quantity,
    },
  );
  dispatch(realRemoveFromCart(product));
};

const realRemoveFromCart = (payload) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload,
  };
};
