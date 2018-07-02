import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Header from 'components/CategoriesList/Header';
import CategoriesList from 'components/CategoriesList';
import { toJS } from 'utils/to-js';

import { addNewCategory, editCategory, deleteCategory } from './actions';
import { makeSelectCategories } from './selectors';

const propTypes = {
  categories: PropTypes.array.isRequired,
  onAddNewCategory: PropTypes.func.isRequired,
  onEditCategory: PropTypes.func.isRequired,
  onDeleteCategory: PropTypes.func.isRequired,
};

class CategoryPage extends React.PureComponent {
  render() {
    const { categories, onAddNewCategory, onEditCategory, onDeleteCategory } = this.props;
    return (
      <div className="container">
        <Header
          onAddItem={onAddNewCategory}
        />
        <CategoriesList
          categories={categories}
          onEditCategory={onEditCategory}
          onDeleteCategory={onDeleteCategory}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onAddNewCategory: (category) => { dispatch(addNewCategory(category)); },
  onEditCategory: (current, updated) => { dispatch(editCategory(current, updated)); },
  onDeleteCategory: (category) => { dispatch(deleteCategory(category)); }
});

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

CategoryPage.propTypes = propTypes;

export default compose(
  withConnect,
)(toJS(CategoryPage));
