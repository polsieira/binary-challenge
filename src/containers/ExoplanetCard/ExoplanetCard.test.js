import React from 'react';
import { shallow } from 'enzyme';
import ExoplanetCard from './ExoplanetCard';

describe('ExoplanetCard', () => {
  describe('ExoplanetCard component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<ExoplanetCard
        planetName='Earf'
        hostStarName='Suuun'
        orbitalPeriod={365}
        distance={10}
        discoveryYear={2000}
      />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});