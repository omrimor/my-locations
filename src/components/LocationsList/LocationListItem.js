import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

import LocationModal from './LocationModal';

const propTypes = {
  location: PropTypes.object.isRequired,
  onEditLocation: PropTypes.func.isRequired,
  onDeleteLocation: PropTypes.func.isRequired,
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
    const { location, onEditLocation, onDeleteLocation, categories } = this.props;
    return ([
      <Card key='location-item'>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{location.name}</CardTitle>
          <CardSubtitle>{location.address}</CardSubtitle>
          <CardText>{location.category}</CardText>
          <Button
            onClick={this.toggle}
          >
            Edit
          </Button>
        </CardBody>
      </Card>,
      <LocationModal
        key='location-modal'
        isOpen={this.state.modal}
        onToggle={this.toggle}
        formInputs={location}
        onEditItem={onEditLocation}
        onDeleteItem={onDeleteLocation}
        categories={categories}
      />
    ]);
  }
}

CategoryListItem.propTypes = propTypes;

export default CategoryListItem;
