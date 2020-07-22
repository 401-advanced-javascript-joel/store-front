import cartReducer, { initCart } from '../store/cartReducer';
import productsReducer, { initProducts } from '../store/productsReducer';
import categoriesReducer, { initCategories } from '../store/categoriesReducer';

// default state.products[0]
let newProduct = {
  _id: 1,
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
      { ...initCategories },
      {
        type: 'SET_CURRENT_CATEGORY',
        payload: 'blah',
      },
    );
    expect(newState.currentCategory).toEqual('blah');
  });
});

describe('Testing Cart Reducer', () => {
  test('runs the ADD_TO_CART action', () => {
    let newState = cartReducer(
      { ...initCart },
      {
        type: 'ADD_TO_CART',
        payload: { ...newProduct },
      },
    );
    expect(newState.cartCount).toBe(1);

    newState = cartReducer(newState, {
      type: 'ADD_TO_CART',
      payload: { ...newProduct },
    });

    expect(newState.cartCount).toBe(2);
  });

  test('runs the REMOVE_FROM_CART action', () => {
    let newState = cartReducer(
      { ...initCart },
      {
        type: 'ADD_TO_CART',
        payload: { ...newProduct },
      },
    );

    expect(newState.cartCount).toBe(1);
    newState = cartReducer(
      { ...newState },
      { type: 'REMOVE_FROM_CART', payload: newState.cart[0] },
    );
    expect(newState.cartCount).toBe(0);
  });
});

describe('Testing Products Reducer', () => {
  test('runs the ADD_TO_CART action', () => {
    initProducts.products.push({ ...newProduct });
    let newState = productsReducer(
      { ...initProducts },
      {
        type: 'ADD_TO_CART',
        payload: initProducts.products[0],
      },
    );
    expect(newState.products[0].inStock).toBe(4);

    newState = productsReducer(newState, {
      type: 'ADD_TO_CART',
      payload: { ...newProduct },
    });
    expect(newState.products[0].inStock).toBe(3);
  });

  test('runs the REMOVE_FROM_CART action', () => {
    let newState = productsReducer(
      { ...initProducts },
      {
        type: 'REMOVE_FROM_CART',
        payload: { ...newProduct, quantity: 2 },
      },
    );
    expect(newState.products[0].inStock).toBe(5);
  });
});
