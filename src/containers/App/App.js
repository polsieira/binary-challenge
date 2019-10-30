import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  async componentDidMount() {

  }

  render() {
    return (
      <main>
        <h1>App</h1>
      </main>
    )
  }
}

export default App;








