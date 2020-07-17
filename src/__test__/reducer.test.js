import cartReducer from '../store/cartReducer';
import productsReducer from '../store/productsReducer';
import categoriesReducer from '../store/categoriesReducer';

// default state.products[0]
let newProduct = {
  name: 'TV',
  category: 'electronics',
  description: 'Its a TV',
  image:
    'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1780&q=80',
  price: 700.0,
  inStock: 5,
};

describe('Testing Categories Reducer', () => {
  test('runs the SET_CURRENT_CATEGORY action', () => {
    let newState = categoriesReducer(
      {},
      { type: 'SET_CURRENT_CATEGORY', payload: 'blah' },
    );
    expect(newState.currentCategory).toEqual('blah');
  });

  test('runs the RESET_STORE action', () => {
    let newState = categoriesReducer({ key: 'blah' }, { type: 'RESET_STORE' });
    expect(newState.key).toBeUndefined();
    expect(newState.categories.length).toBe(3); // this comes from the default
  });
});

describe('Testing Cart Reducer', () => {
  test('runs the ADD_TO_CART action', () => {
    let newState = cartReducer(
      { cart: [], cartCount: 0 },
      { type: 'ADD_TO_CART', payload: newProduct },
    );
    expect(newState.cartCount).toBe(1);

    newState = cartReducer(newState, {
      type: 'ADD_TO_CART',
      payload: newProduct,
    });

    expect(newState.cartCount).toBe(2);
  });

  test('runs the REMOVE_FROM_CART action', () => {
    let newState = cartReducer(
      { cart: [], cartCount: 0 },
      { type: 'ADD_TO_CART', payload: newProduct },
    );
    expect(newState.cartCount).toBe(1);
    newState = cartReducer(
      { ...newState },
      { type: 'REMOVE_FROM_CART', payload: newState.cart[0] },
    );
    expect(newState.cartCount).toBe(0);
  });

  test('runs the RESET_STORE action', () => {
    let newState = cartReducer({ key: 'blah' }, { type: 'RESET_STORE' });
    expect(newState.key).toBeUndefined();
    expect(newState.cart.length).toBe(0); // this comes from the default
  });
});

describe('Testing Products Reducer', () => {
  test('runs the ADD_TO_CART action', () => {
    let newState = productsReducer(null, {
      type: 'ADD_TO_CART',
      payload: newProduct,
    });
    expect(newState.products[0].inStock).toBe(4);

    newState = productsReducer(newState, {
      type: 'ADD_TO_CART',
      payload: newProduct,
    });
    expect(newState.products[0].inStock).toBe(3);
  });

  test('runs the REMOVE_FROM_CART action', () => {
    let newState = productsReducer(null, {
      type: 'ADD_TO_CART',
      payload: newProduct,
    });
    expect(newState.products[0].inStock).toBe(2);
    newState = productsReducer(
      { ...newState },
      {
        type: 'REMOVE_FROM_CART',
        payload: { name: newProduct.name, quantity: 3 },
      },
    );
    expect(newState.products[0].inStock).toBe(5);
  });

  test('runs the RESET_STORE action', () => {
    let newState = productsReducer({ key: 'blah' }, { type: 'RESET_STORE' });
    expect(newState.key).toBeUndefined();
    expect(newState.products.length).toBe(27); // this comes from the default
  });
});
