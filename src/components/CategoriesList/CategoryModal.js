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
  onDeleteItem: PropTypes.func
};

const defaultProps = {
  isNewItem: false
};

class CategoryModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = props.formInputs;
  }
  render() {
    const { isNewItem, isOpen, onToggle, formInputs, onAddItem, onEditItem, onDeleteItem } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={onToggle}>
        <ModalHeader toggle={onToggle}>
          {isNewItem ? 'New Category': 'Edit Category'}
        </ModalHeader>
        <Form>
          <FormGroup>
            <ModalBody>
              <Label for="category">Name</Label>
              <Input
              type="text"
              name="category"
              id="category"
              value={this.state.name}
              placeholder="E.g meetings"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            </ModalBody>
            {
              isNewItem
                ? <ModalFooterNew
                  onAddItem={onAddItem}
                  onAddComplete={() => {
                    this.setState({name: ''})
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

CategoryModal.propTypes = propTypes;
CategoryModal.defaultProps = defaultProps;

export default CategoryModal;

