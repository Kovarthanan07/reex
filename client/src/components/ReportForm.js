import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Input } from 'reactstrap';
import { Form, FormGroup, Label,  FormText } from 'reactstrap';
import { InputGroup, InputGroupText } from 'reactstrap';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;
    const currentUser = JSON.parse(localStorage.getItem('user'));

    const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [sender, setSender] = useState('');
  const [reportDate, setReportDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();

  };
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();

    return (
        <div>
            <a onClick={toggle}><Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab></a>
            <Modal isOpen={modal} toggle={toggle} className={className} style={{ paddingTop: 50 }}>
                <ModalHeader toggle={toggle} close={closeBtn}>Create Report</ModalHeader>
                <ModalBody>
                    <Form
                        onSubmit={(e) => onSubmit(e)}
                        className="container"
                        encType="multipart/form-data"
                    >
                        <FormGroup>
                            <Label for="categorySelect">Sender</Label>
                            <Input
                                required
                                type="select"
                                name="sender"
                                onChange={(e) => setSender(e.target.value)}
                            >
                                <option aria-label="None" value="" />
                                <option value="Employee1">Employee1</option>
                                <option value="Employee2">Employee2</option>
                                <option value="Employee3">Employee3</option>
                                <option value="Employee4">Employee4</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="paymentSelect">Title</Label>
                            <Input
                                required
                                type="text"
                                name="title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Message</Label>
                            <Input
                                type="textarea"
                                name="message"
                                onChange={(e) => setMessage(e.target.value)}
                                id="exampleText"
                            />
                        </FormGroup>
                        <FormGroup className={classes.container} noValidate>
                            <Label for="TransactionDate">Report Date</Label>
                            <Input
                                required
                                type="date"
                                name="transactionDate"
                                onChange={(e) => setReportDate(e.target.value)}
                            ></Input>
                        </FormGroup>
                        <div className="SubmitBtn">
                            <Button color="primary" type="submit">Send</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ModalExample;