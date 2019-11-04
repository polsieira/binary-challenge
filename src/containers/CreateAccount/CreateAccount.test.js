import React from 'react';
import { shallow } from 'enzyme';
import { CreateAccount, mapStateToProps, mapDispatchToProps } from './CreateAccount';
import { checkIsLoading, hasErrored, loginUser } from '../../actions';

jest.mock('../../apiCalls.js');

describe('CreateAccount', () => {
  describe('CreateAccount component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CreateAccount error='' />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot when there is an error', () => {
      wrapper = shallow(<CreateAccount error='error' />);
      expect(wrapper).toMatchSnapshot();
    })

    it('should update the email and password in state when handleChange is called', () => {
      const mockEventName = {
        target: {
          name: 'name',
          value: 'Meep Meep'
        }
      };
      const mockEventEmail = {
        target: {
          name: 'email',
          value: 'email@email.com'
        }
      };
      const mockEventPassword = {
        target: {
          name: 'password',
          value: 'password'
        }
      };

      const expectedName = 'Meep Meep';
      const expectedEmail = 'email@email.com';
      const expectedPassword = 'password';

      wrapper.instance().handleChange(mockEventName);
      wrapper.instance().handleChange(mockEventEmail);
      wrapper.instance().handleChange(mockEventPassword);

      expect(wrapper.state('name')).toEqual(expectedName);
      expect(wrapper.state('email')).toEqual(expectedEmail);
      expect(wrapper.state('password')).toEqual(expectedPassword);
    });

    it('should clear all variables in state when clearInputs is invoked', () => {
      const expected = {
        name: '',
        email: '',
        password: '',
        isLoggedIn: ''
      };

      wrapper.instance().setState({
        name: 'Meep Meep',
        email: 'email@email.com',
        password: 'password'
      });

      wrapper.instance().clearInputs();

      expect(wrapper.state()).toEqual(expected);
    });

    it('should call handleClick on click', () => {
      wrapper.instance().handleClick = jest.fn();
      wrapper.instance().forceUpdate();

      wrapper.find('.form__button').simulate('click');

      expect(wrapper.instance().handleClick).toHaveBeenCalled();
    });

  });

  describe('mapStateToProps', () => {
    it('should return an object with a movies array, an error message and isLoading property', () => {
      const mockState = {
        error: '',
        isLoading: false
      };

      const expected = {
        error: '',
        isLoading: false
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    const mockDispatch = jest.fn();


  });

});