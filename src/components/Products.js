import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import SingleProduct from './SingleProduct';

function Products(props) {
  // TODO: define this function
  function addToCart(product) {
    const action = {
      type: 'ADD_TO_CART',
      payload: product.name,
    };
    props.dispatch(action);
  }

  // TODO: define this function
  function viewDetails(product) {}

  // get only the products that belong to the current
  // category
  const filteredProducts = props.products.filter(
    (product) => product.category === props.currentCategory,
  );

  // create the HTML for all filtered products
  let productsHTML = [];

  for (let i = 0; i < filteredProducts.length; i++) {
    let product = filteredProducts[i];

    productsHTML.push(
      <SingleProduct
        key={i}
        name={product.name}
        img={product.image}
        description={product.description}
        price={product.price}
        add={(e) => {
          addToCart(filteredProducts[i]);
        }}
        view={(e) => {
          viewDetails(filteredProducts[i]);
        }}
      />,
    );
  }

  return (
    <Grid container className='products' spacing={5}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={5}>
          {productsHTML}
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  currentCategory: state.currentCategory,
});

export default connect(mapStateToProps)(Products);