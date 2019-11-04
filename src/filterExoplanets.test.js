import { filterExoplanets } from './filterExoplanets';

describe('filterExoplanets', () => {
  it('should return filtered exoplanets', () => {
    const exoplanets = [
      {
        gaia_dist: 5,
        pl_bmassj: 4.4,
        pl_radj: 44,
        pl_orbper: 500
      },
      {
        gaia_dist: 11,
        pl_bmassj: 4.4,
        pl_radj: 44,
        pl_orbper: 5000
      },
      {
        gaia_dist: 202,
        pl_bmassj: 4.4,
        pl_radj: 44,
        pl_orbper: 300
      },
      {
        gaia_dist: 900,
        pl_bmassj: 4.4,
        pl_radj: 44,
        pl_orbper: 9090
      }
    ]
    const expected = [];
    const min_distance = 10;
    const min_gravity = 10;
    const min_yearLength = 365;

    const result = filterExoplanets(exoplanets, min_distance, min_gravity, min_yearLength);

    expect(result).toEqual(expected);
  });

});