import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { checkIsLoading, hasErrored, addExoplanets } from '../../actions';

jest.mock('../../apiCalls.js');

describe('App', () => {
  describe('App component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with isLoading and error', () => {
      let isLoading, error;
      const mockState = {
        isLoading,
        error
      };

      const expected = {
        isLoading,
        error
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    let mockDispatch;

    beforeEach(() => {
      mockDispatch = jest.fn();
    });

    it('calls dispatch with setLoading', () => {
      const actionToDispatch = checkIsLoading(true);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.checkIsLoading(true);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with hasErrored', () => {
      const error = {
        message: 'This is an error'
      };
      const actionToDispatch = hasErrored(error);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.hasErrored(error);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with a setMovies action', () => {
      const exoplanets = [{
        pl_name: 'Pluto',
        pl_hostname: 'Sun',
        pl_orbper: 2000,
        gaia_dist: 100,
        pl_disc: 2005
      },
      {
        pl_name: 'Mearth',
        pl_hostname: 'Msun',
        pl_orbper: 563,
        gaia_dist: 8,
        pl_disc: 2000
      }]
      const actionToDispatch = addExoplanets(exoplanets);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addExoplanets(exoplanets);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

  });

});

