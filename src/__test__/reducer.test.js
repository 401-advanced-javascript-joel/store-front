import { reducer } from '../store';

describe('reducer correctly changes state', () => {
  test('runs the SET_CURRENT_CATEGORY action', () => {
    let newState = reducer(
      {},
      { type: 'SET_CURRENT_CATEGORY', payload: 'blah' },
    );
    expect(newState.currentCategory).toEqual('blah');
  });

  test('runs the ADD_TO_CART action', () => {
    let newState = reducer(
      { cart: [] },
      { type: 'ADD_TO_CART', payload: 'blah' },
    );

    expect(newState.cart.length).toBe(1);

    newState = reducer(newState, { type: 'ADD_TO_CART', payload: 'blah' });

    expect(newState.cart.length).toBe(2);
  });

  test('runs the RESET_STORE action', () => {
    let newState = reducer({ key: 'notBlah' }, { type: 'RESET_STORE' });
    expect(newState.key).toBeUndefined();
    expect(newState.categories.length).toBe(3);
  });
});
