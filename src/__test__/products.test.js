import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import Products from '../components/Products';

describe('Testing Products Component', () => {
  test('Should be defined', () => {
    const component = mount(
      <Provider store={store}>
        <Products />
      </Provider>,
    );
    expect(component).toBeDefined();
  });
});
