import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Cart from './Cart';

function Header(props) {
  return (
    <div className='header'>
      <AppBar position='fixed'>
        <Toolbar>
          <Tooltip title='Home'>
            <IconButton edge='start' color='inherit' component={Link} to='/'>
              <StorefrontIcon />
            </IconButton>
          </Tooltip>
          <Typography variant='h6' className='header-left'>
            Store Front
          </Typography>
          <div className='header-right'>
            <Cart />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
