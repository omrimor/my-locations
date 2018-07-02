import React from 'react';
import { ModalFooter, Button } from 'reactstrap';

function ModalFooterEdit({onEditItem, onDeleteItem, formInputs, onToggle, compState }) {
  return (
    <ModalFooter>
      <Button
        color="primary"
        onClick={() => {
          onEditItem(formInputs, compState);
          onToggle();
        }}
      >
        Done
      </Button>{' '}
      <Button
        color="danger"
        onClick={() => {
          onDeleteItem(formInputs);
          onToggle();
        }}
      >
        Delete
      </Button>
    </ModalFooter>
  );
}

export default ModalFooterEdit;
