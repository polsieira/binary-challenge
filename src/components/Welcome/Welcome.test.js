import Welcome from './Welcome'
import { shallow } from 'enzyme';
import React from 'react';


describe('Welcome', () => {

  let wrapper;

  describe('AccountManager component', () => {
    beforeEach(() => {
      wrapper = shallow(<Welcome />)
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});

