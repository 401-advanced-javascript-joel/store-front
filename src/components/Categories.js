import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { setCurrentCategory, getCategories } from '../store/categories-slice';

function Categories(props) {
  const { getCategories, setCurrentCategory, categories } = props;

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  let categoryHTML = [];

  for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
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
      fullWidth
    >
      {categoryHTML}
    </ButtonGroup>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = {
  setCurrentCategory,
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
