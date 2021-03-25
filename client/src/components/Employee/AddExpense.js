import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, container } from 'reactstrap';
import '../../App.css';
import AddExpenseForm from './AddExpenseForm';

const AddExpense = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="AddBtn">
      <Button onClick={toggle}>Add Expenses <i class="fas fa-angle-right"></i></Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="container">
        <ModalHeader toggle={toggle}>Add Expenses</ModalHeader>
        <AddExpenseForm/>
      </Modal>
    </div>
  );
}

export default AddExpense;