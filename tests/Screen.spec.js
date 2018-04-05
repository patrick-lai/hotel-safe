/***
 * Screen
 */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Screen from '../src/components/Screen';

Enzyme.configure({ adapter: new Adapter() });

describe('Screen component', () => {
  test('should be able to render a string', () => {
    const wrapper = shallow(<Screen display="sample" />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should have correct classes on different states', () => {
    const none = shallow(<Screen display="none" />);
    const success = shallow(<Screen display="success" status="SUCCESS" />);
    const error = shallow(<Screen display="error" status="ERROR" />);
    expect(none.html()).toMatchSnapshot();
    expect(success.html()).toMatchSnapshot();
    expect(error.html()).toMatchSnapshot();
  });
});
