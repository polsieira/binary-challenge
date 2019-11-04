import { exoplanets } from './exoplanets';

describe('exoplanets', () => {
  it('should return the initial state', () => {
    const expectedState = [];

    const result = exoplanets(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return exoplanets', () => {
    const mockExoplanets = [{
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
    }
    ];
    const mockAction = {
      type: 'ADD_EXOPLANETS',
      exoplanets: mockExoplanets
    }
    const expectedState = mockExoplanets;

    const result = exoplanets(undefined, mockAction);

    expect(result).toEqual(expectedState);
  });
});