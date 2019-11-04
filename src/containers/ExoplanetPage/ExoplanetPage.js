import React from 'react';
import { connect } from 'react-redux';
import './ExoplanetPage.scss';
import PropTypes from 'prop-types';


export const ExoplanetPage = ({ match, exoplanets }) => {
  const exoplanetName = match.match.url.split('/')[2];
  const exoplanet = exoplanets.find(exoplanet => exoplanet.pl_name === exoplanetName);
  const { pl_name, pl_hostname, pl_orbper, pl_bmassj, gaia_dist, pl_disc, pl_pelink } = exoplanet;
  return (
    <div className='ExoplanetPage'>
      <div className='main-info'>
        <a className='planet-name' href={pl_pelink}>{pl_name}</a>
        <p className='discovery'>{` | ${pl_disc}`}</p>
      </div>
      <p className='star-name'>{pl_hostname}</p>
      <div className='data'>
        <p className='label'>{'Orbital Period:'}</p>
        <p className='orbital-period'>{`${pl_orbper} days`}</p>
        <p className='label'>{'Mass:'}</p>
        <p className='mass'>{`Mass: ${pl_bmassj} Mass of Jupiter`}</p>
        <p className='label'>{'Distance To:'}</p>
        <p className='distance'>{`${gaia_dist} light years`}</p>
      </div>
    </div>
  )
}

export const mapStateToProps = ({ exoplanets }) => ({
  exoplanets
})

export default connect(mapStateToProps)(ExoplanetPage);

ExoplanetPage.propTypes = {
  exoplanets: PropTypes.array,
};