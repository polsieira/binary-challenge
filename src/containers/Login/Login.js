import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        <form className='form-sign-in' onSubmit={e => this.handleSubmit(e)}>
          {error ? (<p className='login-message login-error'>{error}</p>) :
            (<p className='login-message'>Sign in with your email</p>)}
          <div>
            <label htmlFor='email' className='form-label'>
              Your email
          </label>
            <input
              id='email'
              type='text'
              placeholder='your@email.com'
              className={error ? 'form__input form__input--error' : 'form__input'}
              name='email'
              value={email}
              onChange={e => this.handleChange(e)}
            ></input>
          </div>
          <div>
            <label htmlFor='password' className='form__label'>
              Your password
          </label>
            <input
              id='password'
              type='password'
              className={error ? 'form__input form__input--error' : 'form__input'}
              name='password'
              placeholder='Must have at least 8 characters'
              value={password}
              onChange={e => this.handleChange(e)}
            ></input>
          </div>
          <button type='submit' className='form__button'>Sign In</button>
        </form>
      </div>
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