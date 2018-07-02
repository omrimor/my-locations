import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

import CategoryModal from './CategoryModal';

const propTypes = {
  category: PropTypes.object.isRequired,
  onEditCategory: PropTypes.func.isRequired,
  onDeleteCategory: PropTypes.func.isRequired
};

class CategoryListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: false
    };
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    const { category, onEditCategory, onDeleteCategory } = this.props;
    return ([
      <ListGroupItem
        key='category-item'
        tag="button"
        action
        onClick={this.toggle}
      >
        {category.name}
      </ListGroupItem>,
      <CategoryModal
        key='category-modal'
        isOpen={this.state.modal}
        onToggle={this.toggle}
        formInputs={category}
        onEditItem={onEditCategory}
        onDeleteItem={onDeleteCategory}
      />
    ]);
  }
}

CategoryListItem.propTypes = propTypes;

export default CategoryListItem;
