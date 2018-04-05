/***
 * Numpad
 */

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Numpad from '../src/components/Numpad';

Enzyme.configure({ adapter: new Adapter() });

describe('Numpad component', () => {
  test('should be able to render a default numpad', () => {
    const wrapper = mount(<Numpad onPress={value => (key = value)} />);

    // Check all buttons render
    const listOfButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'CLR', 0, '⇨'];
    listOfButtons.forEach(action => {
      const target = isNaN(action) ? `"${action}"` : action;
      const button = wrapper.find(`[data-test-id=${target}]`);
      expect(button.length).toBe(1);
    });
  });

  test('should propagate value when pressed', () => {
    const wrapper = mount(<Numpad onPress={value => (key = value)} />);

    // Click all the buttons and make sure we get the right value
    const listOfButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'CLR', 0, '⇨'];
    let key;
    listOfButtons.forEach(action => {
      const target = isNaN(action) ? `"${action}"` : action;
      wrapper.find(`[data-test-id=${target}]`).simulate('click');
      expect(key).toBe(action);
    });
  });
});
