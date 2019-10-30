import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import AccountManager from '../../components/AccountManager/AccountManager';
import Footer from '../../components/Footer/Footer';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getData } from '../../apiCalls';
import { checkIsLoading, hasErrored } from '../../actions';

class App extends Component {

  async componentDidMount() {
    const { checkIsLoading, hasErrored } = this.props;
    //https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=ipac&where=pl_kepflag=1
    const apiBaseUrl = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?";
    // const api_key = "";
    const table = "table=exoplanets";
    const columns = "&select=pl_hostname,ra,dec";
    const parameters = "&order=dec";
    const format = "&format=json"
    const url = `${apiBaseUrl}${table}${columns}${parameters}${format}`;
    try {
      checkIsLoading(true);
      const data = await getData(url);
      checkIsLoading(false);
      console.log(data);
      // save data to store with action
    } catch ({ message }) {
      checkIsLoading(false);
      hasErrored(message);
    }
  }

  render() {
    return (
      <main className='App'>
        <NavigationBar />
        <Route path='/account' render={() => (<AccountManager />)} />
        <Footer />
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
  isLoading: PropTypes.bool,
}







