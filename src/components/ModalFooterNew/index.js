import React from 'react';
import { ModalFooter, Button } from 'reactstrap';

function ModalFooterNew ({onAddItem, onAddComplete, formInputs, onToggle, compState }) {
  return (
    <ModalFooter>
      <Button
        color="primary"
        onClick={() => {
          onAddItem(compState);
          onToggle();
          onAddComplete();
        }}
      >
        Add New
      </Button>
    </ModalFooter>
  );
}

export default ModalFooterNew;
