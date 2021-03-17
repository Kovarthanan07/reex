import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupText } from 'reactstrap';

const AddExpenseForm = (props) => {
    return (
        <Form className="container">
            <FormGroup>
                <Label for="employeeSelect">To</Label>
                <Input type="select" name="select" id="employeeSelect">
                    <option>Employee1</option>
                    <option>Employee2</option>
                    <option>Employee3</option>
                    <option>Employee4</option>
                    <option>Employee5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="expenseTypeSelect">Category</Label>
                <Input type="select" name="select" id="expenseTypeSelect">
                    <option>Travel</option>
                    <option>Food</option>
                    <option>Accomodation</option>
                    <option>Advertisement</option>
                    <option>Other</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="paymentSelect">Payment Method</Label>
                <Input type="select" name="selectMulti" id="paymentSelect">
                    <option>Cash</option>
                    <option>Card</option>
                    <option>Bank</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="amount">Amount</Label>
                <InputGroup>
                    <InputGroupText>Rs.</InputGroupText>
                    <Input placeholder="Amount" min={0} max={10000} type="number" step="1" />
                    <InputGroupText>.00</InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
                <Label for="receiptImage">Attach Receipt</Label>
                <Input type="file" name="file" id="receiptImage" />
                <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
        </FormText>
            </FormGroup>
            <div className="SubmitBtn">
            <Button>Submit</Button>
            </div>
        </Form>
    );
}

export default AddExpenseForm;