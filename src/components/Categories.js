import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import * as actions from '../store/categoriesActions';

function Categories(props) {
  const { getCategories, setCurrentCategory } = props;

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  let categoryHTML = [];

  for (let i = 0; i < props.categories.length; i++) {
    let category = props.categories[i];
    categoryHTML.push(
      <Button
        key={i}
        onClick={(e) => {
          setCurrentCategory(category.name);
        }}
      >
        {category.displayName || category.name}
      </Button>,
    );
  }

  return (
    <ButtonGroup
      id='categories'
      variant='text'
      color='secondary'
      aria-label='text primary button group'
    >
      {categoryHTML}
    </ButtonGroup>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCategory: (payload) =>
    dispatch(actions.setCurrentCategory(payload)),
  getCategories: () => dispatch(actions.getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
