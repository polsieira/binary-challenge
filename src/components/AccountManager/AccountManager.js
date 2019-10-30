import React from 'react';
import Login from '../../containers/Login/Login';
import CreateAccount from '../../containers/CreateAccount/CreateAccount';
import './AccountManager.scss';
import { Route, NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AccountManager = () => {
  return (
    <>
      <div className='modal-container'>
        <ul className='modal-tabs'>
          <NavLink to='/login' className='form-navlink'>
            <li className='login_tab'>Log In</li>
          </NavLink>
          <NavLink to='/signup' className='form-navlink'>
            <li className='login_tab'>Create Account</li>
          </NavLink>
        </ul>
        <Route exact path='/login' render={() => <Login />}
        />
        <Route exact path='/create-account' render={() => <CreateAccount />} />
      </div>
    </>
  );
};

export default AccountManager;

AccountManager.propTypes = {
  loadMovieData: PropTypes.func
};