import React from 'react';
import { connect } from 'react-redux';
import './ExoplanetPage.scss';

export const ExoplanetPage = ({ match, exoplanets }) => {
  const exoplanetName = match.match.url.split('/')[2];
  const exoplanet = exoplanets.find(exoplanet => exoplanet.pl_name === exoplanetName);
  const { pl_name, pl_hostname, pl_orbper, gaia_dist, pl_disc } = exoplanet;
  return (
    <div className='ExoplanetPage'>
      <p>{pl_name}</p>
      <p>{pl_hostname}</p>
    </div>
  )
}

export const mapStateToProps = ({ exoplanets }) => ({
  exoplanets
})

export default connect(mapStateToProps)(ExoplanetPage);