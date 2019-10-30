import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { checkIsLoading, hasErrored } from '../../actions';

class App extends Component {

  async componentDidMount() {
    const { checkIsLoading, hasErrored } = this.props;
    try {
      checkIsLoading(true);
      // fetch data
      checkIsLoading(false);
      // save data to store with action
    } catch ({ message }) {
      checkIsLoading(false);
      hasErrored(message);
    }
  }

  render() {
    return (
      <main>
        <h1>App</h1>
      </main>
    )
  }
}

export const mapStateToProps = ({ isLoading, error }) => ({
  isLoading,
  error
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    checkIsLoading,
    hasErrored
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  hasErrored: PropTypes.func,
  checkIsLoading: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.string,
}







