import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Categories from './Categories';
import Cart from './Cart';

function Header(props) {
  return (
    <div className='header'>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton edge='start' color='inherit'>
            <StorefrontIcon />
          </IconButton>
          <Typography variant='h6' className='header-left'>
            Store Front
          </Typography>
          <div className='header-right'>
            <Categories />
            <Cart />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
