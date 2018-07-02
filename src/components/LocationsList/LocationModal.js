import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

import ModalFooterNew from 'components/ModalFooterNew';
import ModalFooterEdit from 'components/ModalFooterEdit';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isNewItem: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  formInputs: PropTypes.object.isRequired,
  onAddItem: PropTypes.func,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
};

const defaultProps = {
  isNewItem: false
};

class LocationModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = props.formInputs;
  }
  render() {
    const { isNewItem, isOpen, onToggle, formInputs, onAddItem, onEditItem, onDeleteItem, categories } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={onToggle}>
        <ModalHeader toggle={onToggle}>
          {isNewItem ? 'New Location': 'Edit Location'}
        </ModalHeader>
        <Form>
          <FormGroup>
            <ModalBody>
              <Label for="name">Name</Label>
              <Input
                style={{marginBottom: 15}}
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                placeholder="E.g My location"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              />
              <Label for="address">Address</Label>
              <Input
                style={{marginBottom: 15}}
                type="text"
                name="address"
                id="address"
                value={this.state.address}
                placeholder="E.g 9204 Lookout Street Brooklyn, NY"
                onChange={(e) => {
                  this.setState({ address: e.target.value });
                }}
              />
              <Label for="category">Choose Category</Label>
              <Input
                type="select"
                name="category"
                id="category"
                value={this.state.category}
                onChange={(e) => {
                  this.setState({ category: e.target.value });
                }}
              >
                {categories.map((cat, inx) => <option key={inx}>{cat.name}</option>)}
              </Input>
            </ModalBody>
            {
              isNewItem
                ? <ModalFooterNew
                  onAddItem={onAddItem}
                  onAddComplete={() => {
                    this.setState(this.props.formInputs)
                  }}
                  formInputs={formInputs}
                  onToggle={onToggle}
                  compState={this.state}
                />
                : <ModalFooterEdit
                  onEditItem={onEditItem}
                  onDeleteItem={onDeleteItem}
                  formInputs={formInputs}
                  onToggle={onToggle}
                  compState={this.state}
                />
            }
          </FormGroup>
        </Form>
      </Modal>
    );
  }
}

LocationModal.propTypes = propTypes;
LocationModal.defaultProps = defaultProps;

export default LocationModal;

