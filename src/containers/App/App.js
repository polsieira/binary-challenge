import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Route } from 'react-router-dom';
import AccountManager from '../../components/AccountManager/AccountManager';
import Footer from '../../components/Footer/Footer';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getData } from '../../apiCalls';
import { checkIsLoading, hasErrored } from '../../actions';

class App extends Component {

  async componentDidMount() {
    const { checkIsLoading, hasErrored } = this.props;
    //https://api.betterdoctor.com/2016-03-01/doctors?name=%3Aname&first_name=%3Afirst_name&last_name=%3Alast_name&query=%3Aquery&specialty_uid=%3Aspecialty_uid&insurance_uid=%3Aspecialty_uid&practice_uid=%3Apractice_uid&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&gender=male&
    var apiBaseUrl = "https://api.betterdoctor.com/2016-03-01/";
    const url = `${apiBaseUrl}doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=1ac2abd6f94242154ff7cef2b1137a83`;
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







