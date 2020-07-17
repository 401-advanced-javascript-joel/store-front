import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import Categories from '../components/Categories';

const storeContainer = mount(
  <Provider store={store}>
    <Categories />
  </Provider>,
);

const state = storeContainer.prop('store').getState();
const component = storeContainer.find('#categories');

describe('Categories Component working as expected', () => {
  test('Should render the right number of buttons', () => {
    let buttons = component.find('button');
    expect(buttons.length).toBe(state.categories.categories.length);
    buttons.forEach((button, i) => {
      let expectedString =
        state.categories.categories[i].displayName ||
        state.categories.categories.name;
      expect(button.text()).toBe(expectedString);
    });
  });

  test('Should correctly change the currentCategory on button click', () => {
    let buttons = component.find('button');
    buttons.forEach((button, i) => {
      button.simulate('click');
      let currentState = storeContainer.prop('store').getState();
      expect(currentState.categories.currentCategory).toBe(
        state.categories.categories[i].name,
      );
    });
  });
});
