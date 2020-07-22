export const initCart = {
  cart: [],
  cartCount: 0,
  drawer: false,
};

const reducer = (state = initCart, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      let atIndex = state.cart.findIndex(
        (product) => product._id === payload._id,
      );
      if (atIndex === -1) {
        let product = { ...payload, quantity: 1, total: payload.price };

        state.cart = [...state.cart, product];
      } else {
        let product = {
          ...payload,
          quantity: state.cart[atIndex].quantity + 1,
          total: state.cart[atIndex].total + payload.price,
        };
        state.cart = [
          ...state.cart.slice(0, atIndex),
          product,
          ...state.cart.slice(atIndex + 1),
        ];
      }
      return { ...state, cartCount: state.cartCount + 1 };
    case 'REMOVE_FROM_CART':
      state.cart = state.cart.filter((product) => product._id !== payload._id);
      return { ...state, cartCount: state.cartCount - payload.quantity };
    case 'TOGGLE_DRAWER':
      return { ...state, drawer: payload };
    default:
      return state;
  }
};

export default reducer;
