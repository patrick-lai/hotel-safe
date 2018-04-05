/***
 * Indicator
 */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Indicator from '../src/components/Indicator';

Enzyme.configure({ adapter: new Adapter() });

describe('Indicator component', () => {
  test('should have correct classes on different states', () => {
    const none = shallow(<Indicator />);
    const success = shallow(<Indicator status="SUCCESS" />);
    const error = shallow(<Indicator status="ERROR" />);
    expect(none.html()).toMatchSnapshot();
    expect(success.html()).toMatchSnapshot();
    expect(error.html()).toMatchSnapshot();
  });
});
