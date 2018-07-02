import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import CategoryListItem from './CategoryListItem';

const propTypes = {
  categories: PropTypes.array.isRequired,
  onEditCategory: PropTypes.func.isRequired,
  onDeleteCategory: PropTypes.func.isRequired
};

function CategoriesList({categories, onEditCategory, onDeleteCategory}) {
  if (categories.length === 0) {
    return <div>Add your first category in from the top bar</div>;
  }
  return (
    <ListGroup>
      {
        categories.map((item, inx) =>
          <CategoryListItem
            key={inx}
            category={item}
            onEditCategory={onEditCategory}
            onDeleteCategory={onDeleteCategory}
          />
        )
      }
    </ListGroup>
  );
}

CategoriesList.propTypes = propTypes;

export default CategoriesList;
