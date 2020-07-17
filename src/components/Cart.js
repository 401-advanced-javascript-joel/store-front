import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';

function Cart(props) {
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
    <div
      className='cart'
      role='presentation'
      onClick={() => props.dispatch({ type: 'TOGGLE_DRAWER', payload: false })}
    >
      <List>
        {props.cart.map((product) => {
          total += product.total;
          return (
            <ListItem button key={product.name}>
              <ListItemText
                primary={product.name}
                secondary={`${product.quantity} x $${product.price}.00`}
              />
              <ListItemIcon>
                <IconButton
                  edge='start'
                  color='inherit'
                  onClick={() =>
                    props.dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: product,
                    })
                  }
                >
                  <DeleteForeverIcon />
                </IconButton>
              </ListItemIcon>
            </ListItem>
          );
        })}
        <Typography variant='h5' align='center'>
          Total: ${total}.00
        </Typography>
      </List>
    </div>
  );

  return (
    <React.Fragment key='right'>
      <IconButton
        edge='start'
        color='inherit'
        onClick={() => props.dispatch({ type: 'TOGGLE_DRAWER', payload: true })}
      >
        <StyledBadge badgeContent={props.cartCount} color='secondary'>
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <Drawer anchor={'right'} open={props.drawer}>
        {list}
        <IconButton
          edge='start'
          color='inherit'
          onClick={() =>
            props.dispatch({ type: 'TOGGLE_DRAWER', payload: false })
          }
        >
          <ExitToAppIcon />
        </IconButton>
      </Drawer>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  cartCount: state.cart.cartCount,
  drawer: state.cart.drawer,
});

export default connect(mapStateToProps)(Cart);
