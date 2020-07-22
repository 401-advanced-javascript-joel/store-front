export const initProducts = {
  products: [],
};

const reducer = (state = initProducts, action) => {
  const { type, payload } = action;

  let atIndex;
  switch (type) {
    case 'GET_PRODUCTS':
      return { ...state, products: payload };
    case 'ADD_TO_CART':
      atIndex = state.products.findIndex(
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
      return state;
    case 'REMOVE_FROM_CART':
      atIndex = state.products.findIndex(
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
      return state;
    default:
      return state;
  }
};

export default reducer;
