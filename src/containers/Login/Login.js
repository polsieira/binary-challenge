import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { hasErrored } from '../../actions';
import './Login.scss';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = async () => {
    const { hasErrored } = this.props;
    try {
      //fetch user data
      //set user to store
      //login 
      hasErrored('');
    } catch ({ message }) {
      hasErrored(message);
    }
    this.clearInputs();
  };

  clearInputs = () => {
    const stateKeys = Object.keys(this.state);
    stateKeys.forEach(stateKey =>
      this.setState({
        [stateKey]: ''
      })
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    this.handleClick();
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to='/' />;
    }
    const { email, password } = this.state;
    const { error } = this.props;
    return (
      <div className='Login'>
        <TextField
          id='email'
          type='text'
          placeholder='your@email.com'
          className={error ? 'form__input form__input--error' : 'form__input'}
          name='email'
          value={email}
          onChange={e => this.handleChange(e)}
          hintText="Enter your Username"
          floatingLabelText="Username"
        />
        <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          id='password'
          className={error ? 'form__input form__input--error' : 'form__input'}
          name='password'
          placeholder='Must have at least 8 characters'
          value={password}
          onChange={e => this.handleChange(e)}
        />
        <Button label="Login" className='form__button' primary="true" onClick={(event) => this.handleClick(event)} />
      </div >
    );
  }
}

export const mapStateToProps = ({ movies, errMsg, isLoading }) => ({
  movies,
  errMsg,
  isLoading
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ hasErrored }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

Login.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  hasError: PropTypes.func
}