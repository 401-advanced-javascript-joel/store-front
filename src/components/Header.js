import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Categories from './Categories';

function Header(props) {
  const StyledBadge = withStyles(() => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid #f50057`,
      padding: '0 4px',
    },
  }))(Badge);

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
            <IconButton
              edge='start'
              color='inherit'
              onClick={() => props.dispatch({ type: 'RESET_STORE' })}
            >
              <StyledBadge badgeContent={props.cart.length} color='secondary'>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
