import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import Categories from '../components/Categories';

describe('Testing Categories Component', () => {
  test('Should be defined', () => {
    const component = mount(
      <Provider store={store}>
        <Categories />
      </Provider>,
    );
    expect(component).toBeDefined();
  });
});
