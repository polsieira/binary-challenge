import { AccountManager, mapDispatchToProps } from './AccountManager'
import { shallow } from 'enzyme';
import React from 'react';


describe('AccountManager', () => {

  let wrapper;

  describe('AccountManager component', () => {
    beforeEach(() => {
      wrapper = shallow(<AccountManager />)
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});

