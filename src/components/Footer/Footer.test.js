import Footer from './Footer'
import { shallow } from 'enzyme';
import React from 'react';


describe('Footer', () => {

  let wrapper;

  describe('Footer component', () => {
    beforeEach(() => {
      wrapper = shallow(<Footer />)
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});

