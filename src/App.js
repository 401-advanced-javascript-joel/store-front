import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Checkout from './components/pages/Checkout';
import ProductDetail from './components/pages/ProductDetail';
import SimpleCart from './components/Cart';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <SimpleCart />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products/:id' component={ProductDetail} />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
