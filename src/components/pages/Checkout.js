import React from 'react';
import Paper from '@material-ui/core/Paper';
import CheckoutList from '../CheckoutList';
import CheckoutForm from '../CheckoutForm';
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <>
      <Container maxWidth='md' className='main-content'>
        <Paper className='checkout'>
          <CheckoutList />
          <CheckoutForm />
        </Paper>
      </Container>
    </>
  );
};

export default Home;
