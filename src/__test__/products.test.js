import React from 'react';
import { render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import Products from '../components/Products';

const storeContainer = mount(
  <Provider store={store}>
    <Products />
  </Provider>,
);

const state = storeContainer.prop('store').getState();
const component = storeContainer.find('#products');

describe('Testing Products Component', () => {
  test('Should render the correct number of items', () => {
    let renderedProducts = component.find(
      '.MuiGrid-root.single-product.MuiGrid-item',
    );
    let stateProducts = state.products.filter(
      (product) => product.category === state.currentCategory,
    );
    expect(renderedProducts.length).toBe(stateProducts.length);
  });
});
