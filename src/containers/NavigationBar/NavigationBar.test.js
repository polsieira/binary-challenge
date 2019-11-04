import React from 'react';
import { shallow } from 'enzyme';
import { NavigationBar, mapStateToProps, mapDispatchToProps } from './NavigationBar';
import { loginUser } from '../../actions';

describe('NavigationBar', () => {
  describe('NavigationBar component', () => {
    let wrapper;
    const mockLoginUser = jest.fn();
    const mockUser = {
      name: 'Meep Meep',
      id: 5,
      isLoggedIn: true
    }

    beforeEach(() => {
      wrapper = shallow(<NavigationBar user={mockUser} loginUser={mockLoginUser} />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot when there is no user', () => {
      wrapper = shallow(<NavigationBar user={({ isLoggedIn: false })} loginUser={mockLoginUser} />);
      expect(wrapper).toMatchSnapshot();
    })

    it.skip('should call setAnchorEl when handleClick is invoked', () => {
      const mockEvent = {
        currentTarget: 'Target'
      };

      wrapper.instance().handleClick(mockEvent);

      expect(wrapper.setAnchorEl).toHaveBeenCalledWith(mockEvent.currentTarget)
    });

  });

  describe('mapStateToProps', () => {
    it('should return an object with a movies array, an error message and isLoading property', () => {
      const mockState = {
        user: {
          name: 'Meep meep',
          id: 5,
          isLoggedIn: true,
        },
        mockVariable: 'Mock mock mock'
      };

      const expected = {
        user: {
          name: 'Meep meep',
          id: 5,
          isLoggedIn: true,
        }
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    const mockDispatch = jest.fn();


  });

});
