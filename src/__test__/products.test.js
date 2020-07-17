import React from 'react';
import { mount } from 'enzyme';
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
    let stateProducts = state.products.products.filter((product) => {
      return product.category === state.categories.currentCategory;
    });
    expect(renderedProducts.length).toBe(stateProducts.length);
  });
});
