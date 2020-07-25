import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const CheckoutList = (props) => {
  let total = 0;
  let list = [];
  props.cart.forEach((product) => {
    total += product.total;
    list.push(
      <ListItem key={product._id}>
        <ListItemText primary={product.name} secondary={product.description} />
        <Typography variant='body2'>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(product.price)}{' '}
          x {product.quantity} ={' '}
          <strong>
            {' '}
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.price * product.quantity)}
          </strong>
        </Typography>
      </ListItem>,
    );
  });

  return (
    <React.Fragment>
      <Typography variant='h2' align='center' gutterBottom>
        Checkout
      </Typography>
      <List disablePadding>
        {list}
        <ListItem>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1'>
            <strong>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(total)}
            </strong>
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(CheckoutList);
