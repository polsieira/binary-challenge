import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import { checkIsLoading, hasErrored, loginUser } from '../../actions';

jest.mock('../../apiCalls.js');

describe('Login', () => {
  describe('Login component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Login />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot when there is an error', () => {
      wrapper = shallow(<Login error='error' />);
      expect(wrapper).toMatchSnapshot();
    })

    it('should update the email and password in state when handleChange is called', () => {
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

      const expectedEmail = 'email@email.com';
      const expectedPassword = 'password';

      wrapper.instance().handleChange(mockEventEmail);
      wrapper.instance().handleChange(mockEventPassword);

      expect(wrapper.state('email')).toEqual(expectedEmail);
      expect(wrapper.state('password')).toEqual(expectedPassword);
    });

    it('should clear all variables in state when clearInputs is invoked', () => {
      const expected = {
        email: '',
        password: '',
        isLoggedIn: ''
      };

      wrapper.instance().setState({
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
