import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { hasErrored, loginUser, checkIsLoading } from '../../actions';
import './Login.scss';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { attemptLoginUser } from '../../apiCalls';



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
    const { hasErrored, loginUser } = this.props;
    const { email, password } = this.state;
    try {
      checkIsLoading(true);
      const userCheck = await attemptLoginUser({ email, password });
      checkIsLoading(false);
      this.setState({ isLoggedIn: true });
      loginUser({
        ...userCheck,
        isLoggedIn: true
      });
      hasErrored('');
    } catch ({ message }) {
      checkIsLoading(false);
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
    console.log(error)
    return (
      <div className='Login'>
        <h2 className={error ? 'login-message error-message' : 'login-message'}>{error ? error : 'Login in with email and password'}</h2>
        <TextField
          id='email'
          type='text'
          placeholder='your@email.com'
          className='form__input'
          name='email'
          value={email}
          onChange={e => this.handleChange(e)}
          label="Email"
          autoComplete="current-email"
          margin="normal"
          variant="filled"
          color="primary"
        />
        <TextField
          type="password"
          label="Password"
          id='password'
          className='form__input'
          name='password'
          placeholder='Must have at least 8 characters'
          value={password}
          onChange={e => this.handleChange(e)}
          autoComplete="current-password"
          margin="normal"
          color="secondary"
        />
        <Button className='form__button' primary="true" onClick={(event) => this.handleClick(event)}>
          Login
          </Button>
      </div >
    );
  }
}

export const mapStateToProps = ({ error, isLoading }) => ({
  error,
  isLoading
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    hasErrored,
    loginUser,
    checkIsLoading,
  }, dispatch);
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