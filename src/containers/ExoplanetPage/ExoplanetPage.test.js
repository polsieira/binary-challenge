import React from 'react';
import { shallow } from 'enzyme';
import { ExoplanetPage, mapStateToProps, mapDispatchToProps } from './ExoplanetPage';

describe('ExoplanetPage', () => {
  describe('ExoplanetPage component', () => {
    let wrapper;
    const mockMatch = {
      match: {
        url: 'blah/blah/exoplanet'
      }
    };
    const mockExoplanets = [{
      pl_name: 'exoplanet',
      pl_hostname: 'star',
      pl_orbper: 2000,
      gaia_dist: 100,
      pl_disc: 2005
    }]

    beforeEach(() => {
      wrapper = shallow(<ExoplanetPage match={mockMatch} exoplanets={mockExoplanets} />);
    });

    it('should match the snapshot', () => {
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
        }]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

});