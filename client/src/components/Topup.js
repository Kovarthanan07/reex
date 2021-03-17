import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, container } from 'reactstrap';
import TopupForm from './TopupForm';
import '../App.css';

const Topup = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="AddBtn">
      <Button onClick={toggle}>Topup Request <i class="fas fa-angle-right"></i></Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} className="container">
        <ModalHeader toggle={toggle}>Topup Request</ModalHeader>
        <TopupForm/>
      </Modal>
    </div>
  );
}

export default Topup;