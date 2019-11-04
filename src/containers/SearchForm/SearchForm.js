import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchForm.scss';
import { bindActionCreators } from 'redux';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import SearchIcon from '@material-ui/icons/Search';
import { addFilters } from '../../actions';
import PropTypes from 'prop-types';

export class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      distance: 10,
      gravity: 1,
      year: 365,
    }
  }

  handleChange = (event, value, name) => {
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    const { addFilters } = this.props;
    addFilters(this.state);
  }

  render() {
    return (
      <div className="SearchForm">
        <form className="search-form">
          <div className="input">
            <Typography id="range-slider" gutterBottom>
              Distance In Lightyears
          </Typography>
            <Slider
              id="distance"
              name="distance"
              onChange={(event, value) => this.handleChange(event, value, "distance")}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              track="inverted"
              min={0}
              max={100}
            />
          </div>
          <div className="input">
            <Typography id="range-slider" gutterBottom>
              Comparative Gravity
          </Typography>
            <Slider
              id="gravity"
              name="gravity"
              onChange={(event, value) => this.handleChange(event, value, "gravity")}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              track="inverted"
              min={0.0001}
              max={100}
            />
          </div>
          <div className="input">
            <Typography id="range-slider" gutterBottom>
              Length of Year In Days
          </Typography>
            <Slider
              id="year"
              name="year"
              onChange={(event, value) => this.handleChange(event, value, "year")}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              track="inverted"
              min={1}
              max={2000}
            />
          </div>
          <button type="button" className="search-button" onClick={this.handleClick}>
            <SearchIcon className="search-icon" />
          </button>
        </form>
      </div>
    )
  }

}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addFilters
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(SearchForm);

SearchForm.propTypes = {
  addFilters: PropTypes.func
}