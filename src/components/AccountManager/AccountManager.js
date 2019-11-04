import React, { Component } from 'react';
import Login from '../../containers/Login/Login';
import CreateAccount from '../../containers/CreateAccount/CreateAccount';
import './AccountManager.scss';
import { Route, NavLink } from 'react-router-dom';

class AccountManager extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'login'
    }
  }

  changeSelected = (id) => {
    this.setState({ selected: id });
  }

  render() {
    return (
      <div className='AccountManager' >
        <div className='modal-container'>
          <ul className='modal-tabs'>
            <NavLink to='login' className={this.state.selected === 'login' ? 'form-navlink form-navlink--left' : 'form-navlink form-navlink--left unselected'} onClick={() => this.changeSelected('login')}>
              <li className='login_tab'> Log In</li>
            </NavLink>
            <NavLink to='/create-account' className={this.state.selected === 'create account' ? 'form-navlink form-navlink--right' : 'form-navlink form-navlink--right unselected'} onClick={() => this.changeSelected('create account')}>
              <li className='login_tab'>Create Account</li>
            </NavLink>
          </ul>
          <Route exact path='/login' render={() => <Login />}
          />
          <Route exact path='/create-account' render={() => <CreateAccount />} />
        </div>
      </div>
    );
  }
};

export default AccountManager;
