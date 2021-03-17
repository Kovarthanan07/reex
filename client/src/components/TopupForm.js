import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { InputGroup, InputGroupText } from 'reactstrap';

const TopupForm = (props) => {
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
                <Label for="amount">Amount</Label>
                <InputGroup>
                    <InputGroupText>Rs.</InputGroupText>
                    <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
                    <InputGroupText>.00</InputGroupText>
                </InputGroup>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <div className="SubmitBtn">
            <Button>Submit</Button>
            </div>
        </Form>
    );
}

export default TopupForm;