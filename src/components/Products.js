import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import SingleProduct from './SingleProduct';

import {
  getProducts,
  addToCart as removeFromStock,
} from '../store/products-slice.js';
import { addToCart } from '../store/cart-slice.js';

function Products(props) {
  const {
    getProducts,
    addToCart,
    removeFromStock,
    products,
    processing,
    currentCategory,
  } = props;

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
          productID={product._id}
          price={product.price}
          stock={product.inStock}
          processing={processing}
          add={(e) => {
            removeFromStock(filteredProducts[i]);
            addToCart(filteredProducts[i]);
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
  processing: state.products.processing,
  currentCategory: state.categories.currentCategory,
});

const mapDispatchToProps = {
  getProducts,
  removeFromStock,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
