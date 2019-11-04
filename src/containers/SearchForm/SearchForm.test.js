import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';

describe('SearchForm', () => {
  describe('SearchForm component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<SearchForm />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});