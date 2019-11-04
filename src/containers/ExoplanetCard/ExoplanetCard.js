import React from 'react';
import { NavLink } from 'react-router-dom';
import './ExoplanetCard.scss';

const ExoplanetCard = ({ planetName, hostStarName, orbitalPeriod, distance, discoveryYear }) => {
  return (
    <NavLink
      className='exoplanet-link' id={planetName}
      to={`exoplanets/${planetName}`}>
      <div className='ExoplanetCard'>
        <p className="planet-name">{planetName}</p>
        <p className="star-name">{hostStarName}</p>
        <p className="orbital-period">{`${orbitalPeriod} days`}</p>
        <p className="distance">{`${distance} lightyears`}</p>
        <p className="discovery-year">{`${discoveryYear}`}</p>
      </div>
    </NavLink >
  )

}

export default ExoplanetCard;
