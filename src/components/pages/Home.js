import React from 'react';
import CurrentCategory from '../CurrentCategory';
import Categories from '../Categories';
import Products from '../Products';
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <>
      <Container maxWidth='lg' className='main-content'>
        <CurrentCategory />
        <Categories />
        <Products />
      </Container>
    </>
  );
};

export default Home;
