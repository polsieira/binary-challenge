import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import './NavigationBar.scss'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions';
import logo from '../../assets/EXOGO.svg';

export const NavigationBar = ({ user, loginUser }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    if (e.target.id === 'logout') {
      loginUser({
        name: '',
        id: null,
        isLoggedIn: false
      })
    }
  };

  return (
    <nav className="NavigationBar">
      <img className="logo" alt="exogo logo" src={logo} />
      {user.isLoggedIn ?
        <>
          <Button className="menu-button" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            Profile
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem id='saved-exoplanets' onClick={handleClose}>Saved Exoplanets</MenuItem>
            <MenuItem id='logout' onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </> :
        <Link to='/login' >
          <Button className="menu-button" onClick={handleClick}>
            Login
          </Button>
        </Link>}
    </nav>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loginUser,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);

NavigationBar.propTypes = {
  user: PropTypes.object,
}