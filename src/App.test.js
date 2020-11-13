import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from './App.js';

describe('App', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('withRouter(UTechRoutes)').exists()).toBeTruthy();
  });
});
