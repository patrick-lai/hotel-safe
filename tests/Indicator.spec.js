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
    const locked = shallow(<Indicator locked={true} />);
    const open = shallow(<Indicator locked={false} />);
    expect(locked.html()).toMatchSnapshot();
    expect(open.html()).toMatchSnapshot();
  });
});
