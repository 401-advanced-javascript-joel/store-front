import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

function CurrentCategory(props) {
  const { currentCategory } = props;
  return (
    <div className='current-category'>
      <Typography variant='h2' align='center' gutterBottom>
        {currentCategory.toUpperCase()}
      </Typography>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentCategory: state.categories.currentCategory,
});

export default connect(mapStateToProps)(CurrentCategory);
