import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';

import CurrentCategory from './components/CurrentCategory';
import Products from './components/Products';

export default function App() {
  return (
    <CssBaseline>
      <Header />
      <Container maxWidth='lg' className='main-content'>
        <CurrentCategory />
        <Products />
      </Container>
      <Footer />
    </CssBaseline>
  );
}
