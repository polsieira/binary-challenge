export const filterExoplanets = (exoplanets, min_distance, min_gravity, min_yearLength) => {
  return exoplanets
    .filter((exoplanet) => exoplanet.gaia_dist >= min_distance)
    .filter((exoplanet) => {
      const g = exoplanet.pl_bmassj * 1.898 * Math.pow(10, 27) * 6.674 * Math.pow(10, -11) / Math.pow((69.911 * Math.pow(10, 6)), 2);
      return g / 9.8 > min_gravity;
    })
    .filter((exoplanet) => exoplanet.pl_orbper >= min_yearLength)
}