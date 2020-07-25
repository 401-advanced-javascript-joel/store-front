import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PaymentIcon from '@material-ui/icons/Payment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { removeFromCart as restock } from '../store/products-slice.js';
import { toggleDrawer, removeFromCart } from '../store/cart-slice.js';

function SimpleCart(props) {
  const {
    removeFromCart,
    restock,
    toggleDrawer,
    cart,
    cartCount,
    drawer,
  } = props;

  const StyledBadge = withStyles(() => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid #f50057`,
      padding: '0 4px',
    },
  }))(Badge);

  let total = 0;
  const list = (
    <div className='cart' role='presentation'>
      <List>
        {cart.map((product) => {
          total += product.total;
          return (
            <ListItem button key={product.name}>
              <ListItemText
                primary={product.name}
                secondary={'Quantity: ' + product.quantity}
              />
              <ListItemIcon>
                <Tooltip title='Remove Item'>
                  <IconButton
                    edge='start'
                    color='inherit'
                    onClick={() => {
                      restock(product);
                      removeFromCart(product);
                    }}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </Tooltip>
              </ListItemIcon>
            </ListItem>
          );
        })}
        <Typography variant='h5' align='center'>
          Total:{' '}
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(total)}
        </Typography>
      </List>
    </div>
  );

  return (
    <React.Fragment key='right'>
      <Tooltip title='View Cart'>
        <IconButton
          edge='start'
          color='inherit'
          onClick={() => toggleDrawer(true)}
        >
          <StyledBadge badgeContent={cartCount} color='secondary'>
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Tooltip>
      <Drawer anchor={'right'} open={drawer}>
        {list}
        <div className='cart-buttons'>
          <Tooltip title='Checkout'>
            <IconButton
              edge='start'
              color='inherit'
              onClick={() => toggleDrawer(false)}
              to='/checkout'
              component={Link}
            >
              <PaymentIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Close Cart'>
            <IconButton
              edge='start'
              color='inherit'
              onClick={() => toggleDrawer(false)}
            >
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  cartCount: state.cart.cartCount,
  drawer: state.cart.drawer,
});

const mapDispatchToProps = {
  toggleDrawer,
  removeFromCart,
  restock,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
