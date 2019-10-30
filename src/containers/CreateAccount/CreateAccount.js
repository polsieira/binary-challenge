import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { hasErrored, checkIsLoading } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './CreateAccount.scss';
import PropTypes from 'prop-types';

export class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
      this.setState({ isLoggedIn: true });
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
    const { name, email, password } = this.state;
    const { error } = this.props;
    return (
      <div className='Login'>
        <TextField
          type="name"
          hintText="Enter your name"
          floatingLabelText="Name"
          id='name'
          className={error ? 'form__input form__input--error' : 'form__input'}
          name='name'
          placeholder="John Smith"
          value={name}
          onChange={e => this.handleChange(e)}
        />
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
        <RaisedButton label="Login" className='form__button' primary="true" onClick={(event) => this.handleClick(event)} />
      </div >
    );
  }
}

export const mapStateToProps = ({ error, isLoading }) => ({
  error,
  isLoading
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ checkIsLoading, hasErrored }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);

SignUpForm.propTypes = {
  error: PropTypes.string,
  hasErrored: PropTypes.func,
  isLoading: PropTypes.bool,
  checkIsLoading: PropTypes.func,
};