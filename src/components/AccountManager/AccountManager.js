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
          <NavLink to='/account/login' className='form-navlink'>
            <li className='login_tab'>Log In</li>
          </NavLink>
          <NavLink to='/account/create-account' className='form-navlink'>
            <li className='login_tab'>Create Account</li>
          </NavLink>
        </ul>
        <Route exact path='/account/login' render={() => <Login />}
        />
        <Route exact path='/account/create-account' render={() => <CreateAccount />} />
      </div>
    </>
  );
};

export default AccountManager;

AccountManager.propTypes = {

};