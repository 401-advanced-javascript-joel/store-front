const initState = {
  cart: [],
  cartCount: 0,
  drawer: false,
};

const reducer = (state, action) => {
  if (!state) {
    state = initState;
  }
  let newState = { ...state };

  switch (action.type) {
    case 'ADD_TO_CART':
      let atIndex = newState.cart.findIndex(
        (product) => product.name === action.payload.name,
      );
      if (atIndex === -1) {
        let product = {
          name: action.payload.name,
          quantity: 1,
          price: action.payload.price,
          total: action.payload.price,
        };
        newState.cart = [...newState.cart, product];
      } else {
        let product = {
          name: action.payload.name,
          quantity: newState.cart[atIndex].quantity + 1,
          price: newState.cart[atIndex].price,
          total: newState.cart[atIndex].total + action.payload.price,
        };
        newState.cart = [
          ...newState.cart.slice(0, atIndex),
          product,
          ...newState.cart.slice(atIndex + 1),
        ];
      }
      newState.cartCount = newState.cartCount + 1;
      break;
    case 'REMOVE_FROM_CART':
      newState.cart = newState.cart.filter(
        (product) => product.name !== action.payload.name,
      );
      newState.cartCount = newState.cartCount - action.payload.quantity;
      break;
    case 'TOGGLE_DRAWER':
      newState.drawer = action.payload;
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
