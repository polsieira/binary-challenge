import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './ExoplanetContainer.scss';
import { checkIsLoading } from '../../actions';
import ExoplanetCard from '../ExoplanetCard/ExoplanetCard';
import { filterExoplanets } from '../../filterExoplanets';

export const ExoplanetContainer = ({ exoplanets, checkIsLoading, isLoading, filters }) => {
  checkIsLoading(true);
  const { distance, gravity, year } = filters;
  const filteredExoplanets = filterExoplanets(exoplanets, distance, gravity, year)
  const exoplanetCards = filteredExoplanets.map(({ pl_name, pl_hostname, pl_orbper, gaia_dist, pl_disc }) => {
    return (
      <ExoplanetCard
        key={pl_name}
        planetName={pl_name}
        hostStarName={pl_hostname}
        orbitalPeriod={pl_orbper}
        distance={gaia_dist}
        discoveryYear={pl_disc}
      />
    )
  })
  checkIsLoading(false);

  return (
    <div className="ExoplanetContainer">
      {isLoading && <p className="loading-message">Loading exoplanets</p>}
      <ul>
        <li>Planet Name</li>
        <li>Local Star</li>
        <li>Length of Year</li>
        <li>Distance</li>
        <li>Discovery Year</li>
      </ul>
      {exoplanetCards}
    </div>
  )

}

export const mapStateToProps = ({ exoplanets, isLoading, filters }) => ({
  exoplanets,
  isLoading,
  filters
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    checkIsLoading
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(ExoplanetContainer);
