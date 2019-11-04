import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { hasErrored, checkIsLoading, loginUser } from '../../actions';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import './CreateAccount.scss';
import { attemptCreateUser } from '../../apiCalls';
import PropTypes from 'prop-types';

export class CreateAccount extends Component {
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

  handleClick = async (event) => {
    event.preventDefault();
    const { hasErrored, loginUser } = this.props;
    const { name, email, password } = this.state;
    try {
      checkIsLoading(true);
      const userCheck = await attemptCreateUser({ name, email, password });
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

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to='/' />;
    }
    const { name, email, password } = this.state;
    const { error } = this.props;
    return (
      <div className='CreateAccount'>
        <h2 className={error ? 'create-account-message error-message' : 'create-account-message'}>{error ? error : 'Create account with name, email and password'}</h2>
        <TextField
          type="name"
          label="Name"
          id='name'
          className='form__input'
          name='name'
          placeholder="John Smith"
          value={name}
          onChange={e => this.handleChange(e)}
          autoComplete="current-password"
          margin="normal"
        />
        <TextField
          id='email'
          type='text'
          placeholder='your@email.com'
          className='form__input'
          name='email'
          value={email}
          onChange={e => this.handleChange(e)}
          label="Username"
          autoComplete="current-password"
          margin="normal"
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
        />
        <Button label="Login" className='form__button' primary="true" onClick={(event) => this.handleClick(event)} >
          Create Account
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
  return bindActionCreators({ checkIsLoading, hasErrored, loginUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);

CreateAccount.propTypes = {
  error: PropTypes.string,
  hasErrored: PropTypes.func,
  isLoading: PropTypes.bool,
  checkIsLoading: PropTypes.func,
};