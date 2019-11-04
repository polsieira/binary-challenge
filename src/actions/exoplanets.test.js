import * as actions from '../actions';

describe('exoplanet actions', () => {
  it('should have a type of ADD_EXOPLANETS and exoplanets as a payload ', () => {
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
    }
    ]
    const expectedAction = {
      type: "ADD_EXOPLANETS",
      exoplanets,
    };

    expect(actions.addExoplanets(exoplanets)).toEqual(expectedAction)
  });

});