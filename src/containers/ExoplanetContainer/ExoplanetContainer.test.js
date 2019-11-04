import React from 'react';
import { shallow } from 'enzyme';
import { ExoplanetContainer, mapStateToProps, mapDispatchToProps } from './ExoplanetContainer';
import { checkIsLoading } from '../../actions';

describe('ExoplanetContainer', () => {
  describe('ExoplanetContainer component', () => {
    let wrapper;
    const mockCheckIsLoading = jest.fn();
    const mockIsLoading = false;
    const mockExoplanets = [{
      pl_name: 'exoplanet',
      pl_hostname: 'star',
      pl_orbper: 2000,
      gaia_dist: 100,
      pl_disc: 2005
    }]

    beforeEach(() => {
      wrapper = shallow(<ExoplanetContainer exoplanets={mockExoplanets} checkIsLoading={mockCheckIsLoading} isLoading={mockIsLoading} />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot when isLoading', () => {
      const mockIsLoading = true;

      wrapper = shallow(<ExoplanetContainer exoplanets={mockExoplanets} checkIsLoading={mockCheckIsLoading} isLoading={mockIsLoading} />);

      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('mapStateToProps', () => {
    it('should return an object with exoplanets', () => {
      const mockState = {
        exoplanets: [{
          pl_name: 'exoplanet',
          pl_hostname: 'star',
          pl_orbper: 2000,
          gaia_dist: 100,
          pl_disc: 2005
        }],
        error: '',
        isLoading: false
      };

      const expected = {
        exoplanets: [{
          pl_name: 'exoplanet',
          pl_hostname: 'star',
          pl_orbper: 2000,
          gaia_dist: 100,
          pl_disc: 2005
        }],
        isLoading: false
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    const mockDispatch = jest.fn();

    it('should call dispatch with a checkIsLoading action when rendered', () => {
      const actionToDispatch = checkIsLoading(true);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.checkIsLoading(true);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });


  });

});