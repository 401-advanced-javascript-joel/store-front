import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import SingleProduct from './SingleProduct';

import * as actions from '../store/productsActions';

function Products(props) {
  const { getProducts, removeStock, products, currentCategory } = props;

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // TODO: define this function
  function viewDetails(product) {}

  // get only the products that belong to the current
  // category
  const filteredProducts = products.filter(
    (product) => product.category === currentCategory,
  );

  // create the HTML for all filtered products
  let productsHTML = [];

  for (let i = 0; i < filteredProducts.length; i++) {
    let product = filteredProducts[i];

    if (product.inStock > 0) {
      productsHTML.push(
        <SingleProduct
          key={i}
          name={product.name}
          img={product.image}
          description={product.description}
          price={product.price}
          stock={product.inStock}
          add={(e) => {
            removeStock(filteredProducts[i]);
          }}
          view={(e) => {
            viewDetails(filteredProducts[i]);
          }}
        />,
      );
    }
  }

  return (
    <Grid id='products' container className='products' spacing={5}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={5}>
          {productsHTML}
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  currentCategory: state.categories.currentCategory,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(actions.getProducts()),
  removeStock: (payload) => dispatch(actions.addToCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
